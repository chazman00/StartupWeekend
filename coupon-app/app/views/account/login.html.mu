<!DOCTYPE html>
<html>
  <head>
    <title>Login</title>
    <link rel="stylesheet" href="/stylesheets/style.css" />
  </head>
  <body>
	<form action="/login" method="post">
		<div>
		<label>Username:</label>
		<input type="text" name="username"/><br/>
		</div>
		<div>
		<label>Password:</label>
		<input type="password" name="password"/>
		</div>
		<div>
		<input type="submit" value="Submit"/>
		</div>
	</form>
  </body>
</html>