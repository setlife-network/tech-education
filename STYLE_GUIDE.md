# Style Guide [Work In Progress]

A set of responsive & highly reusable UI components are used as building blocks for every page.

- [Box](#Box)
- [Card](#Card)
- [Button](#Button)
- [Flex](#Flex)
- [Image](#Image)
- [Input](#Input)
- [Modal](#Modal)
- [Text](#Text)
- [Toggle](#Toggle)

## Props

### Styled System

Components use [styled-system](https://github.com/jxnblk/styled-system) for responsive, theme-based props.

[Here](https://github.com/jxnblk/styled-system/blob/master/docs/table.md) is a comprehensive list of all styling props.

### Extending

There are a couple of ways to extend UI components. The following examples are equivalent.

```js
// Passing styled-system props
import Button from 'components/Button'

const ButtonExample = () => (
    <Button
        bg='green'
        color='white'
        margin='auto'
        px='2rem'
        py='1rem'
    />
)
```
OR
```js
// Using styled-components

import styled from 'styled-components'
import { Button as Base } from 'components/Button'

const Button = styled(Base)`
    background-color: #02BE57;
    color: 'white';
    margin: auto;
    padding: 1rem 2rem;
`
```

Read more about [extending styles](https://www.styled-components.com/docs/basics#extending-styles).


### Colors

Components use styled-system's [color](https://github.com/jxnblk/styled-system/blob/master/docs/api.md#color) utility to pass `color` and `bg` props.

To promote design consistency, color values are defined in the `theme.colors` object located in the `styles` folder.

### Responsive styles

Pass an array for any styled-system prop to set mobile-first responsive styles through media queries defined in `theme.breakpoints`

ex.
```js
<Box
    width={[
        1,   // 100% below smallest breakpoint
        1/2, // 50% next breakpoint and up
        1/4  // 25% next breakpoint and up
    ]}
>
```

## Theming

Theming is done using styled-components' `ThemeProvider` and passing a `theme` object  as a prop.

Read more about [theming](https://github.com/jxnblk/styled-system/blob/master/docs/theming.md) in styled-system.

```js
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

<ThemeProvider theme={theme}>
    {children}
</ThemeProvider>
```

## Components

### Box

Responsive layout component for commonly used styles.

```js
import Box from 'components/Box'

<Box
    mx='auto'
    p='2rem'
    color='blue'
    bg='white'
    width={['100%', '90%', '80%']}
    minWidth={400}
    height='auto'
    display={['none', 'block']}
/>
```

#### Props 
- Spacing props [(see docs)](https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space)
    - `m` : margin
    - `mt`: margin-top
    - `mr`: margin-right
    - `mb`: margin-bottom
    - `ml`: margin-left
    - `mx`: margin-left and margin-right
    - `my`: margin-top and margin-bottom
    - `p` : padding
    - `pt`: padding-top
    - `pr`: padding-right
    - `pb`: padding-bottom
    - `pl`: padding-left
    - `px`: padding-left and padding-right
    - `py`: padding-top and padding-bottom
- `color`: text color
- `bg`: background color
- `height`
- `width`: responsive
- min & max width & height
- `display`: responsive
- `css`: CSS object or string overrides for edge-case styling

### Button

Button component. Extends `Card`

```js
import Button from 'components/Button'
```


### Card

Layout component with additional style props. Extends `Box`.

```js
import Card from 'components/Card'

<Card
    backgroundImage='/static/path/to/some/background'
    backgroundSize='100% 100%'
    background-repeat='no-repeat'
    p='2rem'
    depth={3}
/>
```

#### Props
- All `Box` props
- [borders](https://github.com/jxnblk/styled-system/blob/master/docs/api.md#borders)
- `backgroundImage`
- `backgroundSize`
- `backgroundPosition`
- `backgroundRepeat`
- `depth`: shadow depth defined in `theme.shadows`

### Flex

Extended `Box` component for flexbox layouts.

```js
import Flex from 'components/Flex'

<Flex
    row
    basis='50%'
    justifyContent='flex-start'
    alignItems='center'
/>
```

#### Props
- All `Box` props
- `direction`
- `basis`
- `row`
- `column`
- `reverse`
- `wrap`
- `order`
- `center`: absolute centering

### Icon
```js
import styled from 'styled-components'
import { CheckCircle as Base } from 'styled-icons/feather/CheckCircle.cjs'
import { themeGet } from 'styled-system'

const CheckCircle = styled(Base)`
    color: ${themeGet('colors.green')};
    width: 60px;
    height: 60px;
    margin: 0 auto 1rem;
`
```

Icons are created using [styled-icons](https://styled-icons.js.org/)

Make sure you import an Icon's `.cjs` module or else Next will crash.

### Image

Image component. Extends `Box`.

```js
import Image from 'components/Image'

<Image
    src='/static/some/image'
    height={200}
    width={200}
    borderRadius={100}
/>
```

#### Props
- All `Box` props
- `borderRadius`

### Input

Input component for use with Formik's [Field](https://jaredpalmer.com/formik/docs/api/field) component. 

### Modal

Modal component. Can be toggled using the `Toggle` component

```js
import Modal from 'components/Modal'
import Toggle from 'components/Toggle'

const ModalExample = () => (
    <Toggle>
            {({ toggled, onToggle }) => (
                <>
                    <Button onClick={onToggle}>
                        Toggle Modal
                    </Button>
                    <Modal opened={toggled} onClose={onToggle}>
                        <Box p='2rem'>
                            <Text>I'm a modal! Click anywhere outside to close me.</Text>
                        </Box>
                    </Modal>
                </>
            )}
        </Toggle>
)
```

#### Props
- `onClose`: function to close the modal. **Required**
- `opened`: whether or not the modal should be open

### Text

The `Text` component allows consistent styling with minimal code.

Pass a `variant` prop to style headings defined in `theme.fonts`

```js
import Text from 'components/Text'

// styling via props
<Text
    fontSize='3.75rem'
    fontWeight='bold'
    textAlign='center'
/>

// or using a variant
<Text variant='h1' textAlign='center'>
```