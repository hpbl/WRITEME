## waifu @abstr_number x-caffe (for Windows)

制作者 : lltcggie

本ソフトは、画像変換ソフトウェア「 @abstr_hyperlink 」の変換機能のみを、 @abstr_hyperlink を用いて書き直し、Windows向けにビルドしたソフトです。 CPUで変換することも出来ますが、CUDA(あるいはcuDNN)を使うとCPUより高速に変換することが出来ます。

GUI supports English, Japanese, Simplified Chinese, Traditional Chinese, Korean, Turkish, Spanish, Russian, and French.

ソフトのダウンロードは @abstr_hyperlink の「Downloads」の項で出来ます。

##  要求環境

このソフトを動作させるには最低でも以下の環境が必要です。

  * OS : Windows Vista以降 @abstr_number bit ( @abstr_number bit用exeはありません)
  * メモリ : 空きメモリ @abstr_number GB以上 (ただし、変換する画像サイズによる)
  * GPU : Compute Capability @abstr_number . @abstr_number 以上のNVIDIA製GPU(CPUで変換する場合は不要)
  * Microsoft Visual C++ @abstr_number 再頒布可能パッケージ Update @abstr_number (x @abstr_number 版)がインストールされていること(必須) 
    * 上記パッケージは @abstr_hyperlink 
    * `ダウンロード` ボタンを押した後、`vcredist_x @abstr_number .exe`を選択し、ダウンロード・インストールを行って下さい。
    * 見つからない場合は、「Visual C++ @abstr_number 再頒布可能パッケージ Update @abstr_number 」で検索してみて下さい。



cuDNNで変換する場合はさらに

  * GPU : Compute Capability @abstr_number . @abstr_number 以上のNVIDIA製GPU



自分のGPUのCompute Capabilityが知りたい場合は @abstr_hyperlink で調べて下さい。

##  cuDNNについて

cuDNNはNVIDIA製GPUでのみつかえる高速な機械学習向けのライブラリです。 cuDNNを使わなくてもCUDAで変換出来ますが、cuDNNを使うと以下のような利点があります。

  * 使用するGPUの種類によっては画像をより高速に変換することが出来る
  * VRAMの使用量を減らすことが出来る(最低でもCUDAの半分未満。分割サイズが大きくなるほど差が開いていく)



このような利点があるcuDNNですが、ライセンスの関係上動作に必要なファイルを配布することが出来ません。   
なので、cuDNNを使いたい人は @abstr_hyperlink でWindows向けバイナリ(v @abstr_number . @abstr_number RC以降)をダウンロードし、 「cudnn @abstr_number _ @abstr_number .dll」をwaifu @abstr_number x-caffeのフォルダに入れて下さい。   
なお、ソフトを起動している最中にdllを入れた場合はソフトを起動しなおしてください。   
(cuDNNをダウンロードするにはNVIDIA Developerへの登録とCUDA Registered Developersへの登録が必要です。 CUDA Registered Developersはおそらく(簡単な)審査があるっぽいので登録してもすぐにcuDNNをダウンロード出来るわけではありません。)

作者の環境での処理速度、VRAM使用量の計測結果は以下の通りです。

  * GPU : GTX @abstr_number Ti
  * VRAM : @abstr_number GB
  * 処理内容 : @abstr_number * @abstr_number のPNG @abstr_number ch画像でノイズ除去と拡大、JPEGノイズ除去レベル @abstr_number 、拡大率 @abstr_number . @abstr_number 、TTAモード未使用
  * 処理時間計測方法 : CUI版で @abstr_number 回の平均処理時間を計測。ただし初めに @abstr_number 回事前に処理を行う(初期化にかかる時間を含めないようにするため)
  * VRAM使用量計算方法 : (GUI版で処理中に使用した最大VRAM) - (GUI版を起動した後のVRAM使用量)



cuDNN RGBモデル

| 分割サイズ | 処理時間 | VRAM使用量(MB) | |:-----------|:-------------|:-------------------| | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number |

CUDA RGBモデル

| 分割サイズ | 処理時間 | VRAM使用量(MB) | |:-----------|:-------------|:-------------------| | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | 計測不能 | 計測不能( @abstr_number 以上) |

cuDNN UpRGBモデル

| 分割サイズ | 処理時間 | VRAM使用量(MB) | |:-----------|:-------------|:-------------------| | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number |

CUDA UpRGBモデル

| 分割サイズ | 処理時間 | VRAM使用量(MB) | |:-----------|:-------------|:-------------------| | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | @abstr_number : @abstr_number : @abstr_number . @abstr_number | @abstr_number | | @abstr_number | 計測不能 | 計測不能( @abstr_number 以上) |

##  使い方(GUI版)

「waifu @abstr_number x-caffe.exe」はGUIソフトです。ダブルクリックで起動します。 またはエクスプローラで「waifu @abstr_number x-caffe.exe」にファイルやフォルダをドラッグ&ドロップで放り込むと、前回起動時の設定で変換を行います。 その場合、設定によっては変換に成功したら自動でダイアログが閉じられます。 また、GUIでもコマンドラインによるオプション設定を行うことが出来ます。 詳しくはコマンドラインオプション(共通)とコマンドラインオプション(GUI版)の項をお読みください。

起動後、「入力パス」欄に画像かフォルダをドラッグ&ドロップで放り込むと「出力パス」欄が自動で設定されます。 出力先を変えたい場合は「出力パス」欄を変更して下さい。

好みに合わせて変換設定を変更することが出来ます。

## 入出力設定
    
    
     ファイルの入出力に関する設定項目群です。
    

### 「入力パス」
    
    
     変換したいファイルのパスを指定します。
     フォルダを指定した場合は、サブフォルダ内も含めた「フォルダ内の変換する拡張子」が付くファイルを変換対象とします。
     複数のファイル、フォルダをドラッグで指定することが出来ます。
     その場合は新しいフォルダの中にファイル、フォルダ構造を維持したまま出力されます。
    （入力パス欄には「(Multi Files)」と表示されます。出力フォルダ名はマウスで掴んでいたファイル、フォルダ名から生成されます）
     参照ボタンを押してファイルを選択する場合、単体のファイル、フォルダか、複数のファイルが選択できます。
    

### 「出力パス」
    
    
     変換後の画像を保存するパスを指定します。
    「入力パス」で フォルダを指定した場合は、指定したフォルダの中に変換したファイルを(フォルダ構造をそのままで)保存します。指定したフォルダがない場合は自動で作成します。
    

### 「フォルダ内の変換する拡張子」
    
    
     「入力パス」がフォルダの場合の、フォルダ内の変換する画像の拡張子を指定します。
     デフォルト値は`png:jpg:jpeg:tif:tiff:bmp:tga`です。
     また、区切り文字は`:`です。
     大文字小文字は区別しません。
     例. png:jpg:jpeg:tif:tiff:bmp:tga
    

### 「出力拡張子」
    
    
     変換後の画像の形式を指定します。
    「出力画質設定」と「出力深度ビット数」に設定できる値はここで指定する形式により異なります。
    

### 「出力画質設定」
    
    
     変換後の画像の画質を指定します。
     設定できる値は整数です。
     指定できる値の範囲と意味は「出力拡張子」で設定した形式により異なります。
    
      * .jpg : 値の範囲( @abstr_number ～ @abstr_number ) 数字が高いほど高画質
      * .webp : 値の範囲( @abstr_number ～ @abstr_number ) 数字が高いほど高画質  @abstr_number だと可逆圧縮
      * .tga : 値の範囲( @abstr_number ～ @abstr_number )  @abstr_number なら圧縮なし、 @abstr_number ならRLE圧縮
    

### 「出力深度ビット数」
    
    
     変換後の画像の @abstr_number チャンネルあたりのビット数を指定します。
     指定できる値は「出力拡張子」で設定した形式により異なります。
    

## 変換画質・処理設定
    
    
     ファイル変換の処理方法、画質に関する設定項目群です。
    

### 「変換モード」
    
    
     変換モードを指定します。
      * ノイズ除去と拡大 : ノイズ除去と拡大を行います 
      * 拡大 : 拡大を行います
      * ノイズ除去 : ノイズ除去を行います
      * ノイズ除去(自動判別)と拡大 : 拡大を行います。入力がJPEG画像の場合のみノイズ除去も行います
    

### 「JPEGノイズ除去レベル」
    
    
    ノイズ除去レベルを指定します。レベルの高いほうがより強力にノイズを除去しますが、のっぺりとした絵になる可能性もあります。
    

### 「拡大サイズ」
    
    
    拡大後のサイズの設定を行います。
      * 拡大率で指定 : 画像を指定の拡大率で拡大します
      * 変換後の横幅で指定 : 画像の縦横比を維持したまま、指定された横幅になるように拡大します(単位はピクセル)
      * 変換後の縦幅で指定 : 画像の縦横比を維持したまま、指定された縦幅になるように拡大します(単位はピクセル)
      * 変換後の縦横幅で指定 : 指定された縦横幅になるように拡大します。「 @abstr_number x @abstr_number 」のように指定します(単位はピクセル)
     @abstr_number 倍を超える拡大率の場合、(ノイズを除去する場合は最初の @abstr_number 回だけ行い)指定された拡大率を超えるまで @abstr_number 倍ずつ拡大し、 @abstr_number の累乗倍でない拡大率の場合は最後に縮小するという処理を行います。そのため変換結果がのっぺりとした絵になる可能性があります。
    

### 「モデル」
    
    
    使用するモデルを指定します。
    変換対象の画像によって最適なモデルは異なるので、様々なモデルを試してみることをおすすめします。
      *  @abstr_number 次元イラスト(RGBモデル) : 画像のRGBすべてを変換する @abstr_number 次元イラスト用モデル
      * 写真・アニメ(Photoモデル) : 写真・アニメ用のモデル
      *  @abstr_number 次元イラスト(UpRGBモデル) :  @abstr_number 次元イラスト(RGBモデル)より高速かつ同等以上の画質で変換するモデル。ただしRGBモデルより消費するメモリ(VRAM)の量が多いので、変換中に強制終了する場合は分割サイズを調節すること
      * 写真・アニメ(UpPhotoモデル) : 写真・アニメ(Photoモデル)より高速かつ同等以上の画質で変換するモデル。ただしPhotoモデルより消費するメモリ(VRAM)の量が多いので、変換中に強制終了する場合は分割サイズを調節すること
      *  @abstr_number 次元イラスト(Yモデル) : 画像の輝度のみを変換する @abstr_number 次元イラスト用モデル
      *  @abstr_number 次元イラスト(UpResNet @abstr_number モデル) :  @abstr_number 次元イラスト(UpRGBモデル)より高画質で変換するモデル。このモデルは分割サイズが違うと出力結果が変わるので注意すること
      *  @abstr_number 次元イラスト(CUnetモデル) :  @abstr_number 次元イラストを同梱のモデルで一番高画質で変換できるモデル。このモデルは分割サイズが違うと出力結果が変わるので注意すること
    

### 「TTAモードを使う」
    
    
    TTA(Test-Time Augmentation)モードを使うかどうかを指定します。
    TTAモードを使うと変換が @abstr_number 倍遅くなる代わりに、PSNR(画像の評価指数の一つ)が @abstr_number . @abstr_number くらい上がるそうです。
    

## 処理速度設定
    
    
     画像変換の処理速度に影響する設定項目群です。
    

### 「分割サイズ」
    
    
    内部で分割して処理を行う際の幅（ピクセル単位）を指定します。
    最適な(処理が最速で終わる)数値の決め方は「分割サイズ」の項で説明します。
    「-------」で区切られている上の方は入力された画像の縦横サイズの約数、
    下の方は「crop_size_list.txt」から読み出した汎用的な分割サイズです。
    分割サイズが大きすぎる場合、要求されるメモリの量(GPUを使う場合はVRAMの量)がPCで使用できるメモリを超えてソフトが強制終了するので気をつけてください。
    処理速度にそれなりに影響するので、同じ画像サイズの画像をフォルダ指定で大量に変換するときは、最適な分割サイズを調べてから変換することをおすすめします。
    ただし、モデルによっては分割サイズを変更すると出力結果が変わるものがあるので気を付けてください。
    (その場合は分割サイズはデフォルトを使用し、バッチサイズを調整することで処理速度を上げることができます)
    

### 「バッチサイズ」
    
    
    内部でまとめて処理を行う際のサイズを指定します。
    バッチサイズを大きくすると処理速度が速くなることがあります。
    分割サイズと同様に要求されるメモリの量がPCで使用できるメモリを超えないように気を付けてください。
    

## 動作設定
    
    
     あまり変更する機会がないと思われる動作設定をまとめた設定群です。
    

### 「ファイル入力時自動変換開始設定」
    
    
     参照ボタンやドラッグアンドドロップで入力ファイルを指定した際に自動で変換を開始するのか設定を行います。
     exeに入力ファイルを引数で与えた場合ではこの項目の設定内容は影響しません。
      * 自動で開始しない : ファイルを入力しても自動で変換を開始しません
      * ファイルを @abstr_number つでも入力したら開始 : ファイルを @abstr_number つでも入力したら自動で変換を開始します
      * フォルダあるいは複数ファイルを入力したら開始 : フォルダ、複数ファイルを入力したら自動で変換を開始します。単体の画像ファイルを変換するのは変換設定の調節を行うときだけだ、という時にどうぞ
    

### 「使用プロセッサー」
    
    
    変換を行うプロセッサーを指定します。
      * CUDA(使えたらcuDNN) : CUDA(GPU)を使って変換を行います(cuDNNが使える場合はcuDNNが使われます)
      * CPU : CPUのみを使って変換を行います
    

### 「出力ファイルを上書きしない」
    
    
     この設定がONの場合、画像の書き込み先に同名のファイルが存在する場合は変換を行いません。
    

### 「引数付き起動時設定」
    
    
     exeに入力ファイルを引数で与えた場合での動作を設定します。
      * 起動時に変換する : 起動時に自動で変換を開始します
      * 成功時に終了する : 変換終了時に失敗していなければ自動で終了します
    

### 「使用GPU No」
    
    
     GPUが複数枚ある場合に使用するデバイス番号を指定できます。CPUモード時や無効なデバイス番号を指定した場合は無視されます。
    

### 「入力参照時固定フォルダ」
    
    
     入力の参照ボタンを押した際に最初に表示されるフォルダをここで設定したフォルダに固定します。
    

### 「出力参照時固定フォルダ」
    
    
     変換した画像の出力先フォルダをここで設定したフォルダに固定します。
     また、出力の参照ボタンを押した際に最初に表示されるフォルダをここで設定したフォルダに固定します。
    

## その他
    
    
     その他の設定項目群です。
    

### 「UIの言語」
    
    
    UIの言語を設定します。
    初回起動時はPCの言語設定と同じ言語が選ばれます。(存在しない場合は英語になります)
    

### 「cuDNNチェック」
    
    
    「cuDNNチェック」ボタンを押すとcuDNNが使えるか調べることが出来ます。
    cuDNNが使えない場合は理由が表示されます。
    

「実行」ボタンを押すと変換が始まります。 途中でキャンセルしたい場合は「キャンセル」ボタンを押します。 ただし、実際に停止するまでタイムラグがあります。 プログレスバーは複数枚の画像を変更した際の進行度合いを示しています。 ログに残り予想時間が表示されますが、これは同じ縦幅、横幅の複数ファイルを処理したときの予想です。 なので、ファイルの大きさがバラバラな場合は役に立ちませんし、処理する画像が @abstr_number 枚以下の時は「不明」としか表示されません。

##  使い方(CUI版)

「waifu @abstr_number x-caffe-cui.exe」はコマンドラインツールです。 `コマンドプロンプト` を立ち上げ、次のようにコマンドを打ち込み、使用して下さい。

以下のコマンドは、使い方を画面に出力します。 @abstr_code_section 

以下のコマンドは、画像変換を実行するコマンドの例です。 @abstr_code_section 以上を実行すると、`mywaifu(noise_scale)(Level @abstr_number )(x @abstr_number . @abstr_number ).png`に変換結果が保存されます。

コマンドリスト、各コマンドの詳細はコマンドラインオプション(共通)とコマンドラインオプション(CUI版)の項をお読みください。

##  コマンドラインオプション(共通)

本ソフトでは、以下のオプションを指定することが出来ます。 GUI版では入力ファイル以外のコマンドラインオプションを指定して起動した場合、現在オプションのファイル保存を行いません。 また、GUI版では指定されなかったオプションは前回終了時のオプションが使用されます。

### -l <文字列>, --input_extention_list <文字列>
    
    
     input_fileがフォルダの場合の、フォルダ内の変換する画像の拡張子を指定します。
     デフォルト値は`png:jpg:jpeg:tif:tiff:bmp:tga`です。
     また、区切り文字は`:`です。
     例. png:jpg:jpeg:tif:tiff:bmp:tga
    

### -e <文字列>, --output_extention <文字列>
    
    
     input_fileがフォルダの場合の、出力画像の拡張子を指定します。
     デフォルト値は`png`です。
    

### -m , --mode 
    
    
     変換モードを指定します。指定しなかった場合は`noise_scale`が選択されます。
      * noise : ノイズ除去を行います (正確には、ノイズ除去用のモデルを用いて画像変換を行います)
      * scale : 拡大を行います (正確には、既存アルゴリズムで拡大した後に、拡大画像補完用のモデルを用いて画像変換を行います)
      * noise_scale : ノイズ除去と拡大を行います (ノイズ除去を行った後に、引き続き拡大処理を行います)
      * auto_scale : 拡大を行います。入力がJPEG画像の場合のみノイズ除去も行います
    

### -s <小数点付き数値>, --scale_ratio <小数点付き数値>
    
    
     画像を何倍に拡大するかを指定します。デフォルト値は` @abstr_number . @abstr_number `ですが、 @abstr_number . @abstr_number 倍以外も指定できます。
     scale_widthかscale_heightが指定された場合、そちらが優先されます。
      @abstr_number . @abstr_number 以外の数値を指定すると、次のような処理を行います。
      * まず、指定された倍率を必要十分にカバーするように、 @abstr_number 倍拡大を繰り返し行います。
      *  @abstr_number の累乗以外の数値が指定されている場合は、指定倍率になるように拡大した画像を縮小します。
    

### -w <整数>, --scale_width <整数>
    
    
     画像の縦横比を維持したまま、指定された横幅になるように拡大します(単位はピクセル)。
     scale_heightと同時に指定すると、指定された縦横幅になるように画像を拡大します。
    

### -h <整数>, --scale_height <整数>
    
    
     画像の縦横比を維持したまま、指定された縦幅になるように拡大します(単位はピクセル)。
     scale_widthと同時に指定すると、指定された縦横幅になるように画像を拡大します。
    

### -n < @abstr_number | @abstr_number | @abstr_number | @abstr_number >, --noise_level < @abstr_number | @abstr_number | @abstr_number | @abstr_number >
    
    
     ノイズ除去レベルを指定します。ノイズ除去用のモデルはレベル @abstr_number ～ @abstr_number のみ用意されているので、
      @abstr_number  か  @abstr_number  か  @abstr_number  か  @abstr_number  を指定して下さい。
     デフォルト値は` @abstr_number `です。
    

### -p , --process 
    
    
     処理に使うプロセッサーを指定します。デフォルト値は`gpu`です。
      * cpu : CPUを使って変換を行います。
      * gpu : CUDA(GPU)を使って変換を行います。Windows版でのみ、cuDNNが使えるならcuDNNを使います。
      * cudnn : cuDNNを使って変換を行います。
    

### -c <整数>, --crop_size <整数>
    
    
     分割サイズを指定します。デフォルト値は` @abstr_number `です。
    

### -q <整数>, --output_quality <整数>
    
    
     変換後の画像の画質を設定します。デフォルト値は`- @abstr_number `です
     指定できる値と意味は「出力拡張子」で設定した形式により異なります。
     - @abstr_number の場合は、各画像形式のデフォルト値が使われます。
    

### -d <整数>, --output_depth <整数>
    
    
     変換後の画像の @abstr_number チャンネルあたりのビット数を指定します。デフォルト値は` @abstr_number `です。
     指定できる値は「出力拡張子」で設定した形式により異なります。
    

### -b <整数>, --batch_size <整数>
    
    
     mini-batchサイズを指定します。デフォルト値は` @abstr_number `です。
     mini-batchサイズは画像を「分割サイズ」で分割したブロックを同時に処理する数のことです。例えば` @abstr_number `を指定した場合、 @abstr_number ブロックずつ変換していきます。
     mini-batchサイズを大きくすると分割サイズを大きくするとの同様にGPUの使用率が高くなりますが、計測した感じだと分割サイズを大きくした方が効果が高いです。
     (例えば分割サイズを` @abstr_number `、mini-batchサイズを` @abstr_number `にするより、分割サイズを` @abstr_number `、mini-batchサイズを` @abstr_number `にした方が処理が速く終わる)
    

### \--gpu <整数>
    
    
     処理に使うGPUデバイス番号を指定します。デフォルト値は` @abstr_number `です。
     GPUデバイス番号は @abstr_number から始まることに注意してください。
     処理にGPUを使わない場合は無視されます。
     また、存在しないGPUデバイス番号を指定した場合はデフォルトのGPUで実行されます。
    

### -t < @abstr_number | @abstr_number >, --tta < @abstr_number | @abstr_number >
    
    
     ` @abstr_number `を指定するとTTAモードを使用します。デフォルト値は` @abstr_number `です。
    

### \--, --ignore_rest
    
    
     このオプションが指定された後の全てのオプションを無視します。
     スクリプト・バッチファイル用です。
    

##  コマンドラインオプション(GUI版)

GUI版ではオプション指定に当てはまらなかった引数は入力ファイルとして認識されます。 入力ファイルはファイル、フォルダ、複数、ファイルとフォルダ同時に指定できます。

### -o , --output_folder 
    
    
     変換された画像を保存するフォルダへのパスを設定します。
     指定されたフォルダの中に変換後のファイルを保存します。
     変換後のファイルの命名規則はGUIで入力ファイルを設定した時に自動で決定される出力ファイル名と同じです。
     指定されなかった場合、ひとつ目の入力ファイルと同じフォルダに保存されます。
    

### \--auto_start < @abstr_number | @abstr_number >
    
    
     ` @abstr_number `を指定すると起動時に自動で変換を開始します。
    

### \--auto_exit < @abstr_number | @abstr_number >
    
    
     ` @abstr_number `を指定すると、起動時に自動で変換した場合に変換が成功すると自動で終了します。
    

### \--no_overwrite < @abstr_number | @abstr_number >
    
    
     ` @abstr_number `を指定すると、画像の書き込み先に同名のファイルが存在する場合は変換を行いません。
    

### -y , --model_type 
    
    
     使用するモデルを指定します。
     GUIでの設定項目「モデル」と以下のように対応しています。
      * upconv_ @abstr_number _anime_style_art_rgb :  @abstr_number 次元イラスト(UpRGBモデル)
      * upconv_ @abstr_number _photo : 写真・アニメ(UpPhotoモデル)
      * anime_style_art_rgb :  @abstr_number 次元イラスト(RGBモデル)
      * photo : 写真・アニメ(Photoモデル)
      * anime_style_art_y :  @abstr_number 次元イラスト(Yモデル)
      * upresnet @abstr_number  :  @abstr_number 次元イラスト(UpResNet @abstr_number モデル)
      * cunet :  @abstr_number 次元イラスト(CUnetモデル)
    

##  コマンドラインオプション(CUI版)

### \--version
    
    
     バージョン情報を出力し、終了します。
    

### -?, --help
    
    
     使い方を表示し、終了します。
     手軽に使い方を確認したい時などにどうぞ。
    

### -i <文字列>, --input_file <文字列>
    
    
     (必須)  変換する画像へのパス
     フォルダを指定した場合、そのフォルダ以下の画像ファイルを全て変換してoutput_fileで指定したフォルダへ出力します。
    

### -o , --output_file 
    
    
     変換された画像を保存するファイルへのパス
     (input_fileがフォルダの場合)変換された画像を保存するフォルダへのパス
     (input_fileが画像ファイルの場合)拡張子(最後の.pngなど)は必ず入力するようにして下さい。
     指定しなかった場合は自動でファイル名を決定し、そのファイルに保存します。
     ファイル名の決定ルールは、
     `[元の画像ファイル名]``(モデル名)``(モード名)``(ノイズ除去レベル(ノイズ除去モードの場合))``(拡大率(拡大モードの場合))``(出力ビット数( @abstr_number ビット以外の場合))``.出力拡張子`
     のようになっています。
     保存される場所は、基本的には入力画像と同じディレクトリになります。
    

### \--model_dir <文字列>
    
    
     モデルが格納されているディレクトリへのパスを指定します。デフォルト値は`models/cunet`です。
     標準では以下のモデルが付属しています。
      * `models/anime_style_art_rgb` :  @abstr_number 次元イラスト(RGBモデル)
      * `models/anime_style_art` :  @abstr_number 次元イラスト(Yモデル)
      * `models/photo` : 写真・アニメ(Photoモデル)
      * `models/upconv_ @abstr_number _anime_style_art_rgb` :  @abstr_number 次元イラスト(UpRGBモデル)
      * `models/upconv_ @abstr_number _photo` : 写真・アニメ(UpPhotoモデル)
      * `models/upresnet @abstr_number ` :  @abstr_number 次元イラスト(UpResNet @abstr_number モデル)
      * `models/cunet` :  @abstr_number 次元イラスト(CUnetモデル)
      * `models/ukbench` : 旧式の写真用モデル(拡大するモデルのみ付属しています。ノイズ除去は出来ません)
     基本的には指定しなくても大丈夫です。デフォルト以外のモデルや自作のモデルを使用する時などに指定して下さい。
    

### \--crop_w <整数>
    
    
     分割サイズ(横幅)を指定します。設定しなかった場合はcrop_sizeの値が使用されます。
     入力する画像の横幅の約数を指定するとより高速に変換できる可能性があります。
    

### \--crop_h <整数>
    
    
     分割サイズ(縦幅)を指定します。設定しなかった場合はcrop_sizeの値が使用されます。
     入力する画像の縦幅の約数を指定するとより高速に変換できま可能性があります。
    

##  分割サイズ

waifu @abstr_number x-caffe(waifu @abstr_number xもですが)は画像を変換する時、 画像を一定のサイズ毎に分割して一つずつ変換を行い、最後に結合して一枚の画像に戻す、という処理をしています。 分割サイズ(crop_size)とは、この画像を分割する際の幅（ピクセル単位）の事です。

CUDAで変換中でもGPUを使い切れていない（GPUの使用率が @abstr_number %近くまでいっていない）場合、 この数値を大きくすることで処理が早く終わる可能性があります。（GPUを使い切ることが出来る様になるため） @abstr_hyperlink などでGPU Load(GPU使用率)とMemory Used(VRAM使用率)を見ながら調節してみて下さい。 また、以下の様な特性があるので参考にして下さい。

  * 必ずしも数値が大きければ大きいほど速くなるわけでは無い
  * 分割サイズが画像の縦横サイズの約数（あるいは割ったときに余りが少ない数）だと、無駄に演算する量が減って速くなる。 (この条件にあまり当てはまらない数値が最速になるケースもあるらしい？)
  * 数値を @abstr_number 倍にした場合、理論上は使用するメモリ量は @abstr_number 倍になる(実際は @abstr_number ～ @abstr_number 倍といったところ)のでソフトが落ちないように注意。特にCUDAはcuDNNに比べてメモリの消費量がとても多いので気をつけること



##  アルファチャンネル付き画像について

本ソフトではアルファチャンネル付き画像の拡大も対応しています。 しかし、アルファチャンネルを単体で拡大する処理になっているため、アルファチャンネル付き画像の拡大は無い場合と比べておよそ @abstr_number 倍の時間がかかるので注意してください。 ただし、アルファチャンネルが単色で構成されている場合はなしの場合とほぼ同じ時間で拡大できます。

##  The format of language files

Language files format is JSON. If you create new language file, add language setting to 'lang/LangList.txt'. 'lang/LangList.txt' format is TSV(Tab-Separated Values).

  * LangName : Language name
  * LangID : Primary language @abstr_hyperlink 
  * SubLangID : Sublanguage @abstr_hyperlink 
  * FileName : Language file name



ex.

  * Japanese LangID : @abstr_number x @abstr_number (LANG_JAPANESE), SubLangID : @abstr_number x @abstr_number (SUBLANG_JAPANESE_JAPAN)
  * English(US) LangID : @abstr_number x @abstr_number (LANG_ENGLISH), SubLangID : @abstr_number x @abstr_number (SUBLANG_ENGLISH_US)
  * English(UK) LangID : @abstr_number x @abstr_number (LANG_ENGLISH), SubLangID : @abstr_number x @abstr_number (SUBLANG_ENGLISH_UK)



## おことわり

本ソフトは無保証です。 利用者の判断の下に使用して下さい。 制作者はいかなる義務も負わないものとします。

## 謝辞

オリジナルの @abstr_hyperlink 、及びモデルの制作を行い、MITライセンスの下で公開して下さった @abstr_hyperlink さん、   
オリジナルのwaifu @abstr_number xを元に @abstr_hyperlink を作成して下さった @abstr_hyperlink さん(READMEやLICENSE.txtの書き方、OpenCVの使い方等かなり参考にさせていただきました)   
@abstr_hyperlink を作成してオリジナルのモデルの制作を行い、MITライセンスの下で公開して下さった @abstr_hyperlink さん   
に、感謝します。   
また、メッセージを英訳してくださった @paul @abstr_number さん、メッセージを中国語(簡体字)に翻訳してくださった @yoonhakcher さん、中国語(簡体字)訳のプルリクエストを下さった @mzhboy さん、   
メッセージを韓国語に翻訳してくださった @kenin @abstr_number さん、韓国語訳の改善を提案してくださった @aruhirin さん、   
メッセージを中国語(繁体字)に翻訳してくださった @lizardon @abstr_number さん、@yoonhakcher さん、トルコ語訳のプルリクエストを下さった @Scharynche さん、フランス語訳のプルリクエストを下さった @Serized さん、   
GUI版のアイコンを提供してくださった JYUNYAさん に感謝します。
