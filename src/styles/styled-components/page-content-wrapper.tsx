import styled from 'styled-components';

const PageContentWrapper = styled.div`
width: 100%;
background-color: white;
padding: 30px 40px;
margin: 20px 20px 15px 0;
border-radius: 30px;
overflow: hidden;

@media (max-width: 992px) {
    min-height: 100vh;
    margin: 0 20px 0 0;
}

@media (max-width: 768px) {
    padding: 15px 20px;
    margin: 10px 10px 5px 0;
    height: 100%;
    min-height: calc(100vh - 20px);
}
`;

export default PageContentWrapper;