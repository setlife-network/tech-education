import React from 'react';

import CourseTile from '../components/CourseTile';

class AdminCoursesPage extends React.Component {
    state = {
        allCourses: []
    }
    componentDidMount() {
        console.log('AdminCoursesPage: componentDidMount')

        fetch('http://localhost:4000/api/fetchCourses', {
            method: 'GET'
        })
        .then(response => {
            console.log('response')
            console.log(response)
            return response.json()
        })
        .then(json => {
            console.log('json')
            console.log(json)

            this.setState({
                allCourses: json
            })
        })

    }

    renderCourses = () => {
        return this.state.allCourses.map(c => {
            return (
                <CourseTile
                    title={c.title}
                    description={c.description}
                    current_version={c.current_version}
                />
            )
        })
    }
    render() {
        console.log('allCourses')
        console.log(this.props.allCourses)

        return (
            <div>


                {/* AdminCoursesPage To Do List */}
                {/* View a List of Courses fetched from the database */}
                {this.renderCourses()}
                {/* Add a new Course to the database */}
                {/* Edit the title, description, and version of Courses in the database */}
            </div>
        );
    }
}

export default AdminCoursesPage;
