# Imagem base
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# 1. Copia os arquivos de projeto (csproj)
# para coincidir com o que o Usuario.Server.csproj está procurando.

COPY ["Artigo.API/Artigo.API.csproj", "Artigo.API/"]
COPY ["Artigo.DbContext/Artigo.DbContext.csproj", "Artigo.DbContext/"]
COPY ["Artigo.Intf/Artigo.Intf.csproj", "Artigo.Intf/"]
COPY ["Artigo.Server/Artigo.Server.csproj", "Artigo.Server/"]

# 2. Restaura as dependências
# Nota: O restore usa o caminho onde copiamos o arquivo acima
RUN dotnet restore "Artigo.API/Artigo.API.csproj"

# 3. Copia todo o resto do código fonte
COPY . .

# 4. Compila e Publica
WORKDIR "/src/Artigo.API"
# Ajustado o nome do arquivo aqui também
RUN dotnet publish "Artigo.API.csproj" -c Release -o /app/publish

# 5. Imagem Final
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080
# Ajustado o nome da DLL final (geralmente segue o nome do projeto)
ENTRYPOINT ["dotnet", "Artigo.API.dll"]