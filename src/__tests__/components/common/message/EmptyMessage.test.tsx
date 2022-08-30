import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { EmptyMessage } from '../../../../component';


jest.mock("nanoid", () => {
      return { nanoid: () => "1234" };
});


describe('EmptyMessage component', () => {

      
      beforeEach(()=>{

            render(
                  <EmptyMessage
                        error='i dont have data'
                        imageLink='i am image link'
                  />
            )
      })

      test('EmptyMessage should display  props message', ()=>{
            const  textElement = screen.getByText(/i dont have data/i);

            expect(textElement).toBeInTheDocument();
      })
})
