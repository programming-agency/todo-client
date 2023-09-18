import { Stack, Box, Paper, Typography, TextField, Button, Autocomplete } from "@mui/material"
import { useState } from "react";
import { useForm } from "react-hook-form";


const skills = ['html', 'css', 'javaScript', 'typescript', 'react']

export const AddTodo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [value, setValue] = useState()

    const onSubmit = data => console.log(data);

    return (
        <Paper sx={{ color: "primary", backgroundColor: "#EEE", paddingY: "100px", paddingX: "200px" }} >

            <Box sx={{ padding: '20px', width: '100%', height: "550px", backgroundColor: "white", }}>

                <Typography variant="h4" > New Todo</Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack sx={{ marginTop: '20px' }} spacing={5}  >
                        <TextField
                            error={errors.label}
                            helperText={errors.label && "please type your label must be min:6 - max:20 character"}
                            fullWidth
                            {...register("label", { required: true, minLength: 6, maxLength: 20 })}
                            label='Label' />

                        <TextField
                            error={errors.message}
                            helperText={errors.message && "your message must be min:6 - max:250 character"}
                            {...register("message",
                                { required: true, maxLength: 250, minLength: 6 })}
                            label='Message'
                            type="text" />

                        <Stack direction={"row"} spacing={2} display='flex' alignItems='center'>
                            <Autocomplete
                                fullWidth
                                options={skills}
                                {...register("status")}
                                type='text'
                                renderInput={(params) =>
                                    <TextField {...params} label="Status" />}
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />
                            <TextField
                                error={errors.date}
                                helperText={errors.date && "Date field is required"}
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



