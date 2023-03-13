import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
const Container=styled.div`
    flex: 5;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper=styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Select1=styled(Select)`
    width: 100%;
`
const TextArea=styled.textarea`
    max-width: 95%;
    max-height: 60%;
    min-width: 95%;
    min-height: 60%;
    padding:20px;
    font-size: 20px;
    margin-top: 30px;
    outline-color: blue;
`
const SubmitDiv=styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`
const Submit=styled.button`
    justify-self: end;
    margin-top: 30px;
    padding: 10px 30px;
`
function Notifications() {
    const options = [
        { value: 'allJobbers', label: 'All jobbers' },
        { value: 'allCustomers', label: 'All customers' },
        { value: 'newInMyWebSite', label: 'New in my web site' },
        { value: 'leastActive', label: 'Least active' },
        { value: 'theMostActive', label: 'The most active' },
    ]
  return (
    <Container>
        <Wrapper>
            <Select1
                defaultValue={[options[2], options[3]]}
                isMulti
                name="colors"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
            />
            <TextArea placeholder='Message...'> 

            </TextArea>
            <SubmitDiv>
                <Submit>Submit</Submit>
            </SubmitDiv>
            
        </Wrapper>
        
    </Container>
  )
}

export default Notifications