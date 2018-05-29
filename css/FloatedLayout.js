import styled from 'styled-components'
import { theme } from '../styled-components'

// const theme = {
//     //colors
//     color_primary: '#55c57a',
//     color_primary_light: '#7ed56f',
//     color_primary_dark: '#28b485',
//     color_grey_dark: '#777',
//     color_white: '#fff',
//     color_black: '#000',
//     //grid
//     grid_width: '114rem',
//     gutter_vertical: '8rem',
//     gutter_horizontal: '6rem'
// }

const Grid = styled.div`

`
const Row = styled.div`
  max-width: ${props => props.theme.grid_width};
  background-color: #eee;
  margin: 0 auto;
  &::after{
    content:'';
    display: table;
    clear:both;
  }
  &:not(:last-child){
    margin-bottom: ${props => props.theme.gutter_vertical};
  }
`
const Col = styled.div`
background-color: red;
float: left;
&:not(:last-child){
  margin-right: ${props => props.theme.gutter_horizontal};
}
`
const Col1of2 = Col.extend`
width: calc((100% - ${props => props.theme.gutter_horizontal})/2);
`
const Col1of3 = Col.extend`
width: calc((100% - 2*${props => props.theme.gutter_horizontal})/3);
`
const Col1of4 = Col.extend`
width: calc((100% - 3*${props => props.theme.gutter_horizontal})/4);
`
const Col2of3 = Col.extend`
width: calc(2*((100% - 2*${props => props.theme.gutter_horizontal})/3) + ${props => props.theme.gutter_horizontal});
`
const Col2of4 = Col.extend`
width: calc(((100% - 3*${props => props.theme.gutter_horizontal})/4) * 2 + ${props => props.theme.gutter_horizontal});
`
const Col3of4 = Col.extend`
width: calc(((100% - 3*${props => props.theme.gutter_horizontal})/4) * 3 + 2*${props => props.theme.gutter_horizontal});
`

export { Grid, Row, Col1of2, Col1of3, Col1of4, Col2of3, Col2of4, Col3of4 };

{/* <ThemeProvider theme={theme}>
       <div> 
        <Grid>
            <Row>
              <Col1of2>Col 1 of 2</Col1of2>
              <Col1of2>Col 1 of 2</Col1of2>
            </Row>
            <Row>
              <Col1of3>Col 1 of 3</Col1of3>
              <Col1of3>Col 1 of 3</Col1of3>
              <Col1of3>Col 1 of 3</Col1of3>
            </Row>
            <Row>
              <Col1of3>Col 1 of 3</Col1of3>
              <Col2of3>Col 2 of 3</Col2of3>
            </Row>
            <Row>
              <Col1of4>Col 1 of 4</Col1of4>
              <Col1of4>Col 1 of 4</Col1of4>
              <Col1of4>Col 1 of 4</Col1of4>
              <Col1of4>Col 1 of 4</Col1of4>
            </Row>
            <Row>
              <Col1of4>Col 1 of 4</Col1of4>
              <Col1of4>Col 1 of 4</Col1of4>
              <Col2of4>Col 2 of 4</Col2of4>
            </Row>
            <Row>
              <Col1of4>Col 1 of 4</Col1of4>
              <Col3of4>Col 3 of 4</Col3of4>
            </Row>
          </Grid>
    </div>
</ThemeProvider> */}
