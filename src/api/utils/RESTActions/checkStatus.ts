export const checkStatus = () => async (response: Response) => {
	if (response.status > 200) {
	  const parsedResponse = await response.json();
	  const error = {
		...response,
		...parsedResponse,
		apiResponse: { parsed: parsedResponse, statusCode: response.status },
	  };
	  throw error;
	}
	return response;
  };