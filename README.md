## Adding a New Blog Post
This guide will walk you through the process of adding a new blog post to the project. The blog post will be written in Markdown, a lightweight markup language that you can learn in a few minutes.

### Step 1: Create a New Markdown File
First, you need to create a new Markdown file in the blogs folder. The file should have a `.md` extension. For example, if you want to create a blog post titled "My First Post", you might create a file named `my-first-post.md`. 

The title is important, since it will be the URL of the blog post. For example, `my-first-post.md` will be found at `www.example.com/posts/my-first-post`.

### Step 2: Write Your Blog Post
Next, you can start writing your blog post in the newly created Markdown file. If you're new to Markdown, you can find a quick and easy guide [here](https://zapier.com/blog/beginner-ultimate-guide-markdown/). A syntax cheatsheet can be found [here](https://www.markdownguide.org/basic-syntax/).

### Step 3: Add Images to Your Post
If you want to add images to your blog post, you need to put the image files in the `public/images` folder. To reference an image in your Markdown file, you can use the following syntax:

```
![Alt Text](/images/your-image-file.jpg)
```

Replace `Alt Text` with a brief description of the image (this text shows up if the image doesn't load), and replace `your-image-file.jpg` with the name of your image file.

### Step 4: Add Metadata to Your Post
When the post and images are done, you need to add metadata to the top of your post. Here's an example, feel free to copy it an change it:
```
---
title: "My First Blog Post"
date: "2023-01-13"
excerpt: "This is the excerpt of my first blog post."
author: "John Doe"
---
```
- Title is the title of the post. 
- Date is the date when the post was written. 
- Format is year-month-day.
- Excerpt is the post snippet that will be shown on the homepage
- Author is the author of the post.

Be sure to start and end it by a line of three dashes.

There is an example post in this repo named `EXAMPLE_POST.md`, you can use this as a template.

### Step 5: Save and Check Your Post
After you've finished writing your post and adding metadata, save your Markdown file. Add it to the `blogs` folder. Your new blog post should now be available on the the website.

Happy blogging! 🙌 🎉




## Running the website locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

