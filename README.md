# React, Next.js & TailwindCSS

+ *In this app I create a Cookie Stand Admin app using Next.js and style using Tailwind CSS.*

## Feature Tasks and Requirements

### pages/Index.js

+ return top level component `<CookieStandAdmin>`
  + `<CookieStandAdmin>`:
    + Will contain the following components:
      + `<Head>`
      + `<Header>`
      + `<main>`
      + `<CreateForm>`
      + `<ReportTable>`
      + `<Footer>`
      + Import time slot data from supplied data.js file.
    + `<CreateForm>`:
      + Object should calculate hourly sales
    + `<ReportTable>`:
      + If reports is empty then render `<h2>No Cookie Stands Available</h2>`
      + If reports is not empty then render a table with thead,tbody and tfoot components.
+ Components should render to match spec.
+ Style all components using TailwindCSS utility classes to match spec.

### Database Deployment Requirements

+ N/A

### Deployed URLs

+ **Running Server:** http://localhost:3000/
+ **Running Clients:** N/A

### Pull Request

+ [cookie-stand-admin/pull/1](URL 'https://github.com/micgreene/cookie-stand-admin/pull/1')

### README

+ [README.md](URL 'https://github.com/micgreene/cookie-stand-admin/blob/main/README.md')