class AnonymousSurvey:
    """Collect anonymous answers from a survey question."""

    def __init__(self, question):
        """Store a question, and prepare to store responses."""
        self.question = question
        self.responses = []

    def show_question(self):
        """Display the question."""
        print(self.question)

    def store_response(self, responses):
        """Store a single response to the survey."""
        self.responses.append(responses)

    def show_results(self):
        """Show all the responses that have been given."""
        print("Survey results:")
        for response in self.responses:
            print(f"- {response}")