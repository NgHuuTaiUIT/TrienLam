const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const AutoLaunch = require('auto-launch');
//Đoạn trên không cần nói cùng biết là import và lấy một số thứ cần thiết từ electron rồi nhỉ :)
// const isDev = require("electron-is-dev");
let win; // khai báo biên win dùng để tạo lên một cửa sổ window của app

// Hàm tạo cửa sổ app
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    kiosk: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  }); // khai báo độ cao và rộng của cửa sổ

  // win.loadURL(
  //   isDev
  //     ? "http://localhost:3000"
  //     : `file://${path.join(__dirname, "../build/index.html")}`
  // );
  // win.loadURL("http://localhost:3000"); // load url của bạn, ở đây là localhost:3000 vì bạn đang chạy reactjs app trên port 3000
  win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
  // win.webContents.openDevTools(); // cái này là cho phép bạn sử dụng devtool như browser để dùng cho debug thôi, không có gì đặc biệt

  // khi close thì ta xóa cửa sổ đi
  win.on("close", function () {
    win = null;
  });
  win.setTitle("Nguyen Dinh Chieu");
}

// lắng nghe khi app sẵn sàng thì sẽ khởi tạo cửa sổ app
app.on("ready", ()=>{
  let autoLaunch = new AutoLaunch({
    name: 'NDC',
    path: app.getPath('exe'),
  });
  autoLaunch.isEnabled().then((isEnabled) => {
    if (!isEnabled) autoLaunch.enable();
  });
  createWindow()
});

// Khi close thì quit khỏi app
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (win == null) {
    createWindow();
  }
});
