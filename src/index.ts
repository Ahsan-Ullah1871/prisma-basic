import app from "./app";

const port = 3002;

async function main() {
	app.listen(port, () => {
		console.log("Server start ");
	});
}

main();

