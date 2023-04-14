import { Logger } from "../common/Logger";

export class AppPage
{
    public withInput(input: string): this {
		Logger.Log(`With input ${input}`);

		cy.getByTestId("input").clear().type(input);

		return this;
	}

	public submit(): this {
		Logger.Log("Submit");

		cy.getByTestId("submit-button").click();

		return this;
	}

	public submitIsDisabled(): this {
		Logger.Log("Submit is disabled");

		cy.getByTestId("submit-button").should('be.disabled');

		return this;
	}

	public hasSubHeading(text: string): this {
		Logger.Log(`Has sub heading ${text}`);

		cy.getByTestId("sub-heading").should("have.text", text);

		return this;
	}

	public hasDescription(text: string): this {
		Logger.Log(`Has description ${text}`);

		cy.getByTestId("description").should("have.text", text);

		return this;
	}
}