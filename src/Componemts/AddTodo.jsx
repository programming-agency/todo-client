import { Stack, Box, Paper, Typography, TextField, Button, Autocomplete, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { appAxios } from "../Axios";

export const AddTodo = () => {
    const [value, setValue] = useState('')

    // validation react hook form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // post data mongo db
    const onSubmit = async data => {
        const result = await appAxios.post("/todo/create", data)
        console.log(result);
        // console.log(data);
    }

    // handle status
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Paper sx={{
            color: "primary",
            backgroundColor: "#EEE",
            paddingY: {
                lg: '50px',
                md: '30px',
                xs: '20px'
            },
            paddingX: {
                lg: '100px'
            },

        }} >

            <Box sx={{
                height: "550px",
                backgroundColor: "white",
                paddingX: {
                    lg: '20px',
                    xs: '2px'

                },
                paddingY: {
                    lg: '20px',
                },
                marginX: {
                    lg: '20px',
                    xs: '10px'
                },

            }}>
                <Typography
                    paddingY={"20px"}
                    variant="h4"
                >
                    New Tod
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={5}  >
                        <TextField
                            error={errors.label}
                            helperText={errors.label && "please enter your label be at minimum 6 characters maximum length 20 characters"}
                            fullWidth
                            {...register("label",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20
                                })}
                            label='Label' />

                        <TextField
                            multiline
                            rows={3}
                            error={errors.message}
                            helperText={errors.message && "please enter your label be at minimum 6 characters maximum length 250 characters"}
                            {...register("message",
                                {
                                    required: true,
                                    maxLength: 250,
                                    minLength: 6
                                })}
                            label='Message'
                            type="text" />

                        <Stack
                            direction={"row"}
                            spacing={1}
                            display='flex'
                            alignItems='center'>

                            <FormControl fullWidth>
                                <InputLabel
                                    id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={value}
                                    error={errors.status}
                                    helperText={errors.status && "status is required"}
                                    label="status"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'COMPLETED'}>COMPLETED</MenuItem>
                                    <MenuItem value={"PENDING"}>PENDING</MenuItem>
                                    <MenuItem value={"UPCOMING"}>UPCOMING</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                error={errors.date}
                                helperText={errors.date && "Date is required"}
                                {...register("date", { required: true })}
                                type="date"
                                fullWidth />
                        </Stack>
                        <Button variant="contained" type="submit">Submit</Button>

                    </Stack>
                </form>
            </Box>
        </Paper>
    )
}



