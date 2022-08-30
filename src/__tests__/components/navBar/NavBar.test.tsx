import '@testing-library/jest-dom';
import { render, fireEvent, screen } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../../app/store';
import { NavBar } from '../../../component';

jest.mock("nanoid", () => {
      return { nanoid: () => "1234" };
});



describe('SideBar', () => {
      let history = createMemoryHistory();

      beforeEach(()=>{
            history = createMemoryHistory();

            render(<Provider store={store}><MemoryRouter><NavBar/></MemoryRouter></Provider>)
      })

      test('should render nav component', ()=>{
            const  textElement = screen.getByText(/Spell/i);
      
            expect(textElement).toBeInTheDocument();
      })

      test('navigation to home page', () => {
            const logoButton = screen.getByRole('logo-button')

            act(()=>{

                  fireEvent.click(logoButton);
            })

            expect(history.location.pathname).toBe('/');
      });


      test('navigation to favourite page', () => {
            const favouriteButton = screen.getByRole('favourite-button')

            act(()=>{

                  fireEvent.click(favouriteButton);
            })

            expect(history.location.pathname).toBe('/favourite');
      });



})