import React from 'react';
import { connect } from 'react-redux';

import Flex from './Flex';

import theme from '../styles/theme';
import Text from './Text';
import Course from './Course';
import { COURSES } from '../constants/index';

class SetlifeCourses extends React.Component {

    renderCourses() {
        return COURSES.map((course) => (
            <Course
                key={course.toString()}
                name={course.name} 
                version={course.version}
                description={course.description}
            />
        ))
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
