import React from 'react';

import Flex from 'components/Flex';
import ImageSection from 'components/ImageSection';
import Text from 'components/Text';
import SetlifeCourses from 'components/SetlifeCourses';

export default class LandingPage extends React.Component {
    goToCurriculumEthos = () => {
        this.props.history.push('/curriculum-ethos')
    }
    render() {
        return (
            <>
                <Flex column className='LandingPage' width='100%'>
                    <ImageSection
                        imageUrl='https://user-images.githubusercontent.com/4914611/51281952-ded64180-19b1-11e9-9b25-a168c316a768.jpeg'
                        subtitle={'We\'ll teach you the core skills you need to understand the world of technology'}
                        title={'Tech Education'}
                    />
                    <ImageSection
                        imageUrl='https://user-images.githubusercontent.com/41223034/51287369-1c909580-19c5-11e9-8f7d-abe222a70109.png'
                        subtitle={'Click to learn more about the curriculum'}
                        title={'Curriculum Ethos'}
                        onClick={this.goToCurriculumEthos}
                    />
                    
                    <SetlifeCourses />
                </Flex>
            </>
        );
    }
}

