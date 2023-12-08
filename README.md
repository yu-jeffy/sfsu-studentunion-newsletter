## Adding a New Blog Post
This guide will walk you through the process of adding a new blog post to the project. The blog post will be written in Markdown, a lightweight markup language that you can learn in a few minutes.

### Step 1: Create a New Markdown File
First, you need to create a new Markdown file. For creating and editing your Markdown files, you have the option to work locally on your computer or use an online markdown editor. A recommended online editor is StackEdit, which you can access [here](https://stackedit.io/app#).

If you're new to Markdown, you can find a quick and easy guide [here](https://zapier.com/blog/beginner-ultimate-guide-markdown/).

There is an example post in this repo named `EXAMPLE_POST.md`, you can download it and use this as a template.

### Step 2: Start With Metadata
To start, you need to add metadata to the top of your post. Here's an example, feel free to copy it and change it:
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

Be sure to start and end it with three dashes, exactly like above.

### Step 3: Write Your Blog Post
Next, you can start writing your blog post in the newly created Markdown file. 

Here is a syntax cheatsheet:

| Style           | Markdown Syntax          | Description                              |
|-----------------|--------------------------|------------------------------------------|
| Paragraph / Line Break           | Blank line            | Separate paragraphs with one or more blank lines       |
| Bold            | `**bold text**`          | Bold text                                |
| Italic          | `*italic text*`          | Italic text                              |
| Bold & Italic   | `***bold & italic***`    | Bold and italic text                     |
| Link            | `[title](https://...)`   | A hyperlink with the given title         |
| Image           | `![alt text](image.jpg)` | An image with alt text                   |
| Strikethrough   | `~~strikethrough~~`      | Strikethrough text                       |
| Unordered List  | `- list item`            | A bullet list item                       |
| Ordered List    | `1. list item`           | A numbered list item                     |
| Blockquote      | `> blockquote`           | A blockquote                             |
| Heading 1       | `# Heading 1`            | The largest heading                      |
| Heading 2       | `## Heading 2`           | The second largest heading               |
| Heading 3       | `### Heading 3`          | The third largest heading                |
| Indent          | `&nbsp;&nbsp;&nbsp;&nbsp;`     | Indent text by four spaces               |

Another syntax cheatsheet can be found [here](https://www.markdownguide.org/basic-syntax/). 

### Step 3: Add Images to Your Post
If you want to add images to your blog post, you need to put the image files in the `public/images` folder. To reference an image in your Markdown file, you can use the following syntax:

```
![Alt Text](/images/your-image-file.jpg)
```

Replace `Alt Text` with a brief description of the image (this text shows up if the image doesn't load), and replace `your-image-file.jpg` with the name of your image file.

### Step 5: Save and Check Your Post
After you've finished writing your post and adding metadata, save your Markdown file. Add it to the `blogs` folder. 

The file should have a `.md` extension. For example, if you want to create a blog post titled "My First Post", you might create a file named `my-first-post.md`. 

The title is important, since it will be the URL of the blog post. For example, `my-first-post.md` will be found at `www.example.com/posts/my-first-post`.

### Step 6: All Done!
Your new blog post should now be available on the the website.

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

