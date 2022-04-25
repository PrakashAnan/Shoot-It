import { CheckBox, Label } from "@mui/icons-material";
import { Card, CardContent, Checkbox, Grid, Paper, TextField } from "@mui/material"
import "./signup1.css";

const Signup1 = () => {
    return (
        <div>
            <div className="container">
            <Paper className="main_paper">
                <Grid container className="grid1">
                    <Grid item md={6}>
                        <Card>
                            <CardContent>
                                <div>
                                    <img className="image" src="https://photojeepers.com/wp-content/uploads/2020/04/dslr-camera-travel-photography-1080x600.jpg"></img>
                                </div>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6}>
                        <Card>
                            <CardContent>
                                <h4 className="resgister">Registration</h4>
                                <h6 className="go">Go for the best</h6><br /><br />

                                <TextField
                                    label="Full Name"
                                    className="text1 w-100"
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    variant="filled"
                                    size="small"
                                />  <br /><br />
                                <TextField
                                    label="Username"
                                    className="text2 w-100"
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    variant="filled"
                                    size="small"
                                /> <br /><br />
                                <TextField
                                    label="mobile no"
                                    className="text3 w-100"
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    variant="filled"
                                    size="small"
                                />  <br /><br />
                                <TextField
                                    label="password"
                                    className="text3 w-100"
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    variant="filled"
                                    size="small"
                                />  <br /><br />
                                <Checkbox
                                    label="male"
                                />
                                <Checkbox
                                    label="female"
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Paper>
            </div>
        </div>


    )
}
export default Signup1