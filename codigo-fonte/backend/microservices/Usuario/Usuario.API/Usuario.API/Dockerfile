# Imagem base .NET 9
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# 1. Copia TUDO da raiz do repositório para dentro do container
COPY . .

# 2. Restaura
# ATENÇÃO: Verifique se este caminho está exato no seu Git. 
# Se o .csproj estiver em "Usuario/Usuario.API/Usuario.API.csproj", mantenha assim.
# Caso contrário, ajuste o caminho abaixo.
RUN dotnet restore "Usuario.API/Usuario.API/Usuario.API.csproj"

# 3. Compila e Publica
# Entra na pasta onde está o csproj para fazer o publish
WORKDIR "/src/Usuario.API/Usuario.API"
RUN dotnet publish "Usuario.API.csproj" -c Release -o /app/publish

# 4. Imagem Final
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/publish .

# Render ignora o EXPOSE, mas deixamos para documentação
EXPOSE 8080

# Esta variável é CRUCIAL. Diz ao .NET para rodar na porta 8080 e aceitar conexões externas
ENV ASPNETCORE_URLS=http://0.0.0.0:8080

ENTRYPOINT ["dotnet", "Usuario.API.dll"]