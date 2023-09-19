import { Stack, Box, Paper, Typography, TextField, Button, Autocomplete } from "@mui/material"
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { appAxios } from "../Axios";
// import { useNavigate } from "react-router-dom";



const skills = ['html', 'css', 'javaScript', 'typescript', 'react']

export const AddTodo = () => {

    // const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [value, setValue] = useState()

    const onSubmit = data => {

        // const result = await appAxios.post("/todo/create", data)
        // console.log("result", result);

        fetch('https://todo-server-programming-agency.vercel.app/todo/create', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        console.log(data);


        

    }

    




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

                <Typography paddingY={"20px"} variant="h4" > New Todo</Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={5}  >
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

                        <Stack direction={"row"} spacing={1} display='flex' alignItems='center'>
                            <Autocomplete
                                fullWidth
                                options={skills}

                                type='text'
                                renderInput={(params) =>
                                    <TextField {...params} label="Status" {...register("status")} />}
                                value={value}
                                onChange={(newValue) => setValue(newValue)}

                            />
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



