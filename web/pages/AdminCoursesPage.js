import React from 'react';
import { connect } from 'react-redux'

import Box from 'components/Box';
import CourseTile from 'components/CourseTile';
import Text from 'components/Text';

import { fetchCourses } from '../reducers/contentManagement'

class AdminCoursesPage extends React.Component {
    componentDidMount() {
        console.log('AdminCoursesPage: componentDidMount')
        this.props.fetchCourses()
    }

    renderCourses = () => {
        return this.props.allCourses.map(c => {
            return (
                <CourseTile
                    {...c}
                />
            )
        })
    }
    render() {
        console.log('allCourses')
        console.log(this.props.allCourses)

        return (
            <Box>


                {/* AdminCoursesPage To Do List */}
                {/* View a List of Courses fetched from the database */}
                {this.renderCourses()}
                {/* Add a new Course to the database */}
                {/* Edit the title, description, and version of Courses in the database */}
            </Box>
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
