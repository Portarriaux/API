/* Aqui, você está configurando o multer para processar uploads de arquivos. 
A configuração inclui a definição de onde os arquivos 
serão armazenados e como o nome de arquivo será gerado. */

const path = require("path");
const multer = require("multer"); 
const crypto = require('crypto');


const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp"); // 
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads"); 

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};

module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER
}

/* Em resumo, essa parte do código configura o multer para
 salvar os arquivos enviados em disco, define a pasta
  de destino e cria nomes de arquivo únicos usando um hash 
  aleatório. Isso garante que os arquivos enviados sejam 
  armazenados de forma segura e evita conflitos de nomes.
 */