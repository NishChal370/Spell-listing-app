import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../../app/store';
import { SearchCard } from '../../../../component';


jest.mock("nanoid", () => {
      return { nanoid: () => "1234" };
});


describe('SideBar', () => {

      test('should render test card', ()=>{

            render(
                  <Provider store={store}>
                        <SearchCard 
                              index = '1'
                              title= 'hello'
                              showDetail= {false}
                              setDetailShow={jest.fn()}
                              modifyLocalStore={jest.fn()}
                              isInFavourite={false}
                        />
                  </Provider>
            )

            const  textElement = screen.getByText(/hello/i);

            expect(textElement).toBeInTheDocument();
      })


      test('favourite state should be change and favourite image should not be shown', ()=>{
            render(
                  <Provider store={store}>
                        <SearchCard 
                              index = '1'
                              title= 'hello'
                              showDetail= {false}
                              setDetailShow={jest.fn()}
                              modifyLocalStore={jest.fn()}
                              isInFavourite={false}
                        />
                  </Provider> )


            const favouriteButton = screen.getByRole('favourite-button');
      
            fireEvent.click(favouriteButton);

            expect( screen.getByRole('favourite-img') ).toBeEmptyDOMElement();
      })


      test('detail button should not be rotate', ()=>{

            let {container } = render(
                  <Provider store={store}>
                        <SearchCard 
                              index = '1'
                              title= 'hello'
                              showDetail= {false}
                              setDetailShow={jest.fn()}
                              modifyLocalStore={jest.fn()}
                              isInFavourite={false}
                        />
                  </Provider>
            )


            const showDetailButton = screen.getByRole('showDetail-button');
      
            fireEvent.click(showDetailButton);

            const rotateClassName = container.getElementsByClassName('rotate-180');

            expect(rotateClassName.length).toBe(0);
      })

})