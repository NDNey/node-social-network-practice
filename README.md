# Node Social Network
This CRUD app with user login and authentication allows you to create, update, and delete posts. All uploaded images are stored using Cloudinary. User account information is stored elsewhere in MongoDB.

<article>
      <div>
  <div>
<table>
  <tbody><tr>
    <td width="100%" valign="top">
      <h3><a id="user-content-portfolio" class="anchor" aria-hidden="true" href="#portfolio"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Demo</h3>
            <img src="public/imgs/demo.gif" width="100%" alt="Portfolio" style="max-width:100%;">
        <p><strong>Node</strong> -> CRUD App</p>
    </td>
  </tr>
</tbody></table>
</article>

## How To Use:
  - Fork the repo
  - Clone your forked repo.
  - Create a `.env` file and add the following:
  ```js 
  PORT = 8000 'Or any port you would like'
  DB_STRING = Your database URI 'I used MongoDB when testing'
  CLOUD_NAME = Your cloudinary cloud name
  API_KEY = Your cloudinary api key
  API_SECRET = Your cloudinary api secret
  ```
  - Do 'npm install' in your terminal.
  - Run with 'npm start' in your terminal.


