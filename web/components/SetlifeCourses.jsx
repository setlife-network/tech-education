import React from 'react';
import { connect } from 'react-redux';

import Flex from './Flex';

import theme from '../styles/theme';
import Text from './Text';
import Course from './Course';

class SetlifeCourses extends React.Component {

    renderCourses = () => {
        return courses.map((course) => (<Course key={course} name={course.name} version={course.version} description={course.description}/>))
    }

    render() {
        return (
            <>
                <Flex
                    width='100%'
                    center
                    bg={theme.colors.charcoal}
                >
                    <Text
                        color={theme.colors.textSecondary}
                        weight='700'
                        size='2rem'
                    >
                        {'Setlife Courses'}
                    </Text>
                </Flex>
                {this.renderCourses()}
            </>
        );
    }
}

// TODO Remove mock data and make a course entity
const courses = [{
    name: 'Fundamentals of Software',
    version: 'Version 1.0',
    description: 'This course is best suited for newcomers to the world of programing.\n\n                            In Part 1, student will establish a foundational understanding of the basic logical principles that govern the behavior of a program\n\n                            Part 2 will feature actual coding  and language-specific syntax and should only be introduced after the fundamental foundation has been set. This will help students reinforce these principles in practice and start building  a familiarity for reading and writing source code.'
},
{
    name: 'Discovering & Verifying Digital Information',
    version: 'Coming Soon',
    description: ''
}
]

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SetlifeCourses);
