import '@testing-library/jest-dom';
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../app/store';
import Home from '../../pages/Home';


jest.mock("nanoid", () => {
      return { nanoid: () => "1234" };
});

describe('Home page', ()=> {

      beforeEach(()=>{

            render(<Provider store={store}><Home/></Provider>)
      })

      test('should render home page', ()=>{
            const  textElement = screen.getByText(/Search for the desired word/i);
      
            expect(textElement).toBeInTheDocument();
      })
      
      
      test("search input value should be empty bt default", ()=>{
            const inputElement = screen.getByRole('searchInput')
            
            expect(inputElement.closest("input")?.value).toBe('')
      })
      
      
      test("search input value should be changed to hi", ()=>{
            const inputElement = screen.getByRole('searchInput');
      
            fireEvent.change(inputElement, { target: {value: 'hi'} })
      
            expect(inputElement.closest("input")?.value).toBe('hi')
      })

})