import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '../../../../component';

jest.mock("nanoid", () => {
      return { nanoid: () => "1234" };
});

describe('ErrorMessage component', () => {

      
      beforeEach(()=>{

            render(
                  <ErrorMessage
                        error='something is wrong'
                  />
            )
      })

      test('ErrorMessage should display  props message', ()=>{
            const  textElement = screen.getByText(/something is wrong/i);

            expect(textElement).toBeInTheDocument();
      })
})
