from gradio_client import Client

client = Client("akhaliq/anycoder")
result = client.predict(
		api_name="/lambda"
)
print(result)