import app from "./app";

const port = 3000;

async function main() {
	app.listen(port, () => {
		console.log("Server start");
	});
}

main();

