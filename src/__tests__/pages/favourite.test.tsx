import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import Favourite  from "../../pages/Favourite";


jest.mock("nanoid", () => {
      return { nanoid: () => "1234" };
});


describe('Favourite page', ()=> {

      beforeEach(()=>{

            render(<Provider store={store}><Favourite/></Provider>)
      })

      test('should render favourite page', ()=>{

            const  titleTextElement = screen.getByText(/Yours Favourite word/i);

            expect(titleTextElement).toBeInTheDocument();
      })
})