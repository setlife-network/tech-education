import React from 'react';

import Card from 'components/Card';
import Button from 'components/Button';
import Text from 'components/Text';

const CourseTile = (props) => {
    console.log('props: ' + props)
    return (
        <Card
            depth={3}
            //width={50}
            //borders={10}
            //height='3rem'
            mt='1rem'
            ml='3rem'
            mr='40rem'
            bg='white'
            //width={['100%', '90%', '80%']}
            minWidth={400}
            p='2rem'

            //display={['none', 'inline']}
            pr='2rem'
            color='#B5B5B5'
            pb='1rem'
            //m='1.5rem'
           

        >
            <Text 
                fontWeight='bold' 
                fontSize='10rem'

               
            >
                {props.title}
            </Text>
            <Text >
                {props.description}
            </Text>
            <Button
                bg='border'
                color='facebook'
                //display={['none', 'block']}
                pr='0.3rem'
                mr='1rem'
                ml='1rem'
                mt='1rem'
                
            >
                EDIT
            </Button>
            <Button
                bg='border'
                color='facebook'
                //display={['none', 'block']}
                pr='0.3rem'
                mr='1rem'
                ml='1rem'
                mt='1rem'
                
                
            >
                DELETE
            </Button>
        </Card>
    )
}

export default CourseTile