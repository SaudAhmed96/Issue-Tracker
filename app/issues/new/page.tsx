"use client";

import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

interface IssueForm {
	title: string;
	description: string;
}

const NewIssuePage = () => {
	const router = useRouter();
	const { register, control, handleSubmit } = useForm<IssueForm>();
	// console.log(register("title"));
	const [error, setError] = useState("");

	return (
		<div className="max-w-xl">
			{error && (
				<Callout.Root color="red" className="mb-5">
					<Callout.Text>{error}</Callout.Text>
				</Callout.Root>
			)}
			<form
				className="space-y-3"
				onSubmit={handleSubmit(async (data) => {
					try {
						await axios.post("/api/issues", data);
						router.push("/issues");
					} catch (error) {
						console.log(error);
						setError("An unexpected error occured.");
					}
				})}
			>
				<TextField.Root placeholder="Title" {...register("title")}>
					{/* <TextField.Slot></TextField.Slot> */}
				</TextField.Root>
				<Controller
					name="description"
					control={control}
					render={({ field }) => (
						<SimpleMDE placeholder="Description" {...field} />
					)}
				/>

				<Button>Submit New Issue</Button>
			</form>
		</div>
	);
};

export default NewIssuePage;
