import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import BackSpaceIcon from "@material-ui/icons/Backspace";
import { useReducer } from "react";
function Calculator() {
	const reducer = (state, action) => {
		switch (action.operation) {
			case "NUMBER":
				if (state.result !== "0") {
					return { result: `${state.result}${action.value}` };
				} else {
					return { result: `${action.value}` };
				}
			case "OPERATOR":
				return { result: `${state.result} ${action.value} ` };
			case "EQUALS":
				try {
					return { result: `${eval(state.result)}` };
				} catch (error) {
					return { result: `${error.toString()}` };
				}
			case "CLEARALL":
				return { result: `0` };
			case "BACKSPACE":
				if (state.result.length === 1) {
					return { result: `0` };
				} else {
					return { result: `${state.result.slice(0, state.result.length - 1)}` };
				}
			default:
				return { result: `Internal Error` };
		}
	};
	const [state, dispatch] = useReducer(reducer, {
		result: "0",
		operation: "none",
		value: "",
	});
	const useStyles = makeStyles((theme) => ({
		calculator: {
			margin: "auto",
			backgroundColor: "black",
			height: "100vh",
			width: "100vw",
		},
		container: {
			backgroundColor: "black",
			width: "40vw",
			height: "80vh",
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%,-50%)",
			border: "2px solid #f50057",
			borderRadius: "10px",
		},
		paper: {
			margin: "auto",
			width: "90%",
			height: "100%",
			padding: "5px",
			backgroundColor: "black",
			color: "lime",
			border: "4px solid #f50057",
			fontWeight: "900",
			fontSize: "20pt",
			wordWrap: "break-word",
		},
		buttonGrp: {
			margin: "auto",
			display: "flex",
			justifyContent: "space-evenly",
		},
		button: {
			fontWeight: "800",
			width: "100%",
		},
	}));
	const classes = useStyles();
	return (
		<div className={classes.calculator}>
			<Grid container spacing={4} className={classes.container}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>{state.result}</Paper>
				</Grid>
				<Grid container item xs={12} spacing={0}>
					<Grid container item xs={12} className={classes.buttonGrp} spacing={2}>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "CLEARALL", value: "C" });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								C
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "OPERATOR", value: "%" });
								}}
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								&#37;
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button
								onClick={() => {
									dispatch({ operation: "BACKSPACE", value: "Clear" });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
								startIcon={<BackSpaceIcon />}
							>
								Clear
							</Button>
						</Grid>
					</Grid>
					<Grid container item xs={12} className={classes.buttonGrp} spacing={2}>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "NUMBER", value: "7" });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								7
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "NUMBER", value: "8" });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								8
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "NUMBER", value: "9" });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								9
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "OPERATOR", value: "/" });
								}}
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								&#247;
							</Button>
						</Grid>
					</Grid>
					<Grid container item xs={12} className={classes.buttonGrp} spacing={2}>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "NUMBER", value: "4" });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								4
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "NUMBER", value: "5" });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								5
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "NUMBER", value: "6" });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								6
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "OPERATOR", value: "*" });
								}}
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								&#215;
							</Button>
						</Grid>
					</Grid>
					<Grid container item xs={12} className={classes.buttonGrp} spacing={2}>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "NUMBER", value: "1" });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								1
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "NUMBER", value: "2" });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								2
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "NUMBER", value: "3" });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								3
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "OPERATOR", value: "-" });
								}}
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								&#8722;
							</Button>
						</Grid>
					</Grid>
					<Grid container item xs={12} className={classes.buttonGrp} spacing={2}>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "NUMBER", value: "0" });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								0
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "NUMBER", value: "." });
								}}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								.
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "EQUALS", value: "=" });
								}}
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								=
							</Button>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
									dispatch({ operation: "OPERATOR", value: "+" });
								}}
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								&#43;
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Calculator;
