
# link naar website
https://stichtingaccessebility.azurewebsites.net/

commands om het project up to date krijgen voor .NET 6

- > dotnet tool install --global dotnet-ef  
- dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.0
- dotnet add package Microsoft.EntityFrameworkCore.Tools --version 6.0.0
- dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 6.0.0 (local only)
- dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design --version 6.0.0

- dotnet ef migrations add <name>
- dotnet ef database update

-  dotnet add package MySql.EntityFrameworkCore --version 6.0.0 (azure database)

