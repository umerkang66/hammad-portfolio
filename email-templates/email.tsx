export const getEmailTemplate = (
  name: string,
  email: string,
  message: string
) => `
  <html>
    <h2>A user sent a message</h2>
    <h3>NAME: ${name}</h3>
    <h3>EMAIL: ${email}</h3>
    <h3>MESSAGE: ${message}</h3>
  </html>
`;
