import React from 'react';
import { connect } from 'react-redux'

import Text from 'components/Text';

import { fetchCourses } from '../reducers/contentManagement'

class AdminCoursesPage extends React.Component {
    componentDidMount() {
        console.log('AdminCoursesPage: componentDidMount')
        this.props.fetchCourses()
    }
    render() {
        console.log('allCourses')
        console.log(this.props.allCourses)

        return (
            <div>


                {/* AdminCoursesPage To Do List */}
                {/* View a List of Courses fetched from the database */}
                {/* Add a new Course to the database */}
                {/* Edit the title, description, and version of Courses in the database */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allCourses: state.contentManagement.allCourses
    }
}

const mapDispatchToProps = {
    fetchCourses
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCoursesPage);
