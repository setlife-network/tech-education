#!/usr/bin/env node


process.bin = process.title = 'setlife';

var program = require('commander');
var fs = require('fs-extra');
var path = require('path');
var ejs = require('ejs');
var _ = require('lodash');
var pluralize = require('pluralize');
var pkg = require('./package.json');

var generateComponent = function(name, options) {
    console.log('Creating ' + name + ' component...');

    var templatePath = path.join(process.cwd(), 'templates', 'component.ejs');
    var destinationPath = path.join(process.cwd(), 'web/components', name + '.jsx');
    var redux = options.redux || false;
    var stateless = options.stateless || false;

    fs.readFile(templatePath, 'utf8', function(err, data) {
        var component = ejs.render(data, {
            name: name,
            redux: options.redux || false,
            stateless: stateless || false
        });

        fs.writeFile(destinationPath, component);
        console.log('Created component:  ' + name + '...');
    });
};

var generateStylesheet = function(name) {
    console.log('Creating ' + name + ' stylesheet...');

    var styleTemplate = path.join(process.cwd(), 'templates', 'stylesheet.ejs');
    var styleDestination = path.join(process.cwd(), 'web/styles', name + '.less');

    fs.readFile(styleTemplate, 'utf8', function(err, data) {
        var stylesheet = ejs.render(data, { name: name });

        fs.writeFile(styleDestination, stylesheet);
        console.log('Created stylesheet:  ' + name + '...');
    });
};

var generateModel = function(name, options) {
    console.log('Creating ' + name + ' model...');

    var templatePath = path.join(process.cwd(), 'api/templates', 'model.ejs');
    var destinationPath = path.join(process.cwd(), 'api/models', name + '.js');

    fs.readFile(templatePath, 'utf8', function(err, data) {
        var databaseTableName = pluralize(name.replace(/([A-Z])/g, '_$1').toLowerCase()).substring(1);

        var model = ejs.render(data, {
            name: name,
            databaseTableName: databaseTableName
        });

        fs.writeFile(destinationPath, model);
        console.log('Created model:  ' + name + '...');
    });
};

var generateType = function(name) {
    console.log('Creating ' + name + ' stylesheet...');

    var templatePath = path.join(process.cwd(), 'api/templates', 'type.ejs');
    var destinationPath = path.join(process.cwd(), 'api/types', name + 'Type.js');

    fs.readFile(templatePath, 'utf8', function(err, data) {
        var type = ejs.render(data, { name: name });

        fs.writeFile(destinationPath, type);
        console.log('Created type:  ' + name + '...');
    });
};

var addModelToIndex = function(name) {
    console.log('Adding ' + name + ' model to index...');

    amendJsIndex({
        itemPath: 'api/models',
        itemName: name
    })
};

var addTypeToIndex = function(name) {
    console.log('Adding ' + name + 'Type to index...');

    amendJsIndex({
        itemPath: 'api/types',
        itemName: name + 'Type'
    })
};

var addStyleToIndex = function(name) {
    console.log('Adding ' + name + ' stylesheet to index...');

    var stylesIndexPath = path.join(process.cwd(), 'src/styles', 'index.less');

    fs.readFile(stylesIndexPath, 'utf8', function(err, indexedStyles) {
        var mainStyles = indexedStyles.substring(0, indexedStyles.indexOf('// Component styles'));
        var newStyleIndex = mainStyles + '// Component styles';

        var importLines = indexedStyles.split('@import ');
        var componentStyles = _.reduce(importLines, function(e, k, i) {
            if (k.toLowerCase() != k) {
                e.push(k.replace(/(\n)|(\')|(;)/g, ''));
            }
            return e;
        }, []);
        componentStyles.shift();
        componentStyles.push(name);
        componentStyles.sort();
        componentStyles.forEach(function(e, i) {
            newStyleIndex += '\n@import \'' + e + '\';';
        });

        fs.writeFile(stylesIndexPath, newStyleIndex);
        console.log('Added stylesheet:  ' + name + ' to index...');
    });
};

const amendJsIndex = (params) => {
    var indexPath = path.join(process.cwd(), params.itemPath, 'index.js');

    fs.readFile(indexPath, 'utf8', function(err, indexedItems) {
        var newItemIndex = indexedItems.split('return {')[0] + 'return {';
        var afterReturn = indexedItems.split('return {')[1];

        // Matches all strings inside require('') statements
        var rx = /require\(\'.\/\s*(.*?)\s*\'\)/g;
        var items = [];
        var match;

        while ((match = rx.exec(afterReturn)) !== null) {
            items.push(match[1]);
        }

        items.push(params.itemName);
        items.sort();
        items = _.uniq(items);

        items.forEach(function(s, i) {
            newItemIndex += '\n        ' + s + ': require(\'./' + s + '\'),';
        });
        newItemIndex = newItemIndex.substring(0, newItemIndex.length - 1);
        newItemIndex += '\n    };\n})();';

        fs.writeFile(indexPath, newItemIndex);
        console.log(params.itemName + ' has been added to the ' + params.itemPath + ' index')
    });
}

// Parse command line options

program
.version(pkg.version)
.usage('<command> [options]');

program
.command('create-component <name>')
.option('-s, --style', 'Create dedicated stylesheet')
.option('-r, --redux', 'Connect Redux state mappings')
.option('-t, --stateless', 'Create a stateless component')
.description('Generate a new React component.')
.action(function(name, options) {
    generateComponent(name, options);
        
    var style = options.style;

    if (style) {
        generateStylesheet(name);
        addStyleToIndex(name);
    }
});

program
.command('create-model <name>')
.option('-t, --type', 'Create associated Bookshelf-GraphQL Type file in /api/types/')
.description('Generate a new Bookshelf Model and associated GraphQL Type (optional). Use Pascal Case (ie: NewUser) and do not write the \'-Type\' suffix, it will be appended automagically.')
.action(function(name, options) {
    generateModel(name);
    addModelToIndex(name);
        
    var type = options.type;

    if (type) {
        generateType(name);
        addTypeToIndex(name);
    }
});


// Failsafe that shows the help dialogue if the command is not recognized (`$ react xyz`)
program.on('*', function(opt) {
    program.help();
});

program.parse(process.argv);

// Handle case where no command is passed (`$ react`)
if (!process.argv.slice(2).length) {
    program.help();
}
