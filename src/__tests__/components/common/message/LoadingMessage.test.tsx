import { render, screen } from "@testing-library/react";
import { LoadingMessage } from "../../../../component";

jest.mock("nanoid", () => {
      return { nanoid: () => "1234" };
});


describe('LoadingMessage component', () => {
      
      beforeEach(()=>{

            render(
                  <LoadingMessage/>
            )
      })

      test('LoadingMessage should be rendered', ()=>{
            const loadingImage = screen.getByRole('loading-image')

            expect(loadingImage).toBeDefined();
      })
})
