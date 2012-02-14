/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: JA (Japanese)
 * 
 * 元々あったmessage_ja.jsを一部拡張しています。
 * "required"と"digits"と"fullWidthKatakana"は引数にparamとelementをとる関数を用意してあり
 * elementのtitle要素に入力項目を指定しておけば、どの入力項目でエラーが出たか表示できます
 * ex. <input type="text" id="name" title="名前" class="required"> の場合
 *     エラーメッセージに「名前は必須項目です。」と表示させることが出来ます
 */
jQuery.extend(jQuery.validator.messages, {
  required:
    function(param, element){
      return element.title + "は必須項目です。"
    },
  remote: "このフィールドを修正してください。",
  email: "有効なEメールアドレスを入力してください。",
  url: "有効なURLを入力してください。",
  date: "有効な日付を入力してください。",
  dateISO: "有効な日付（ISO）を入力してください。",
  number: "有効な数字を入力してください。",
  digits:
    function(param, element){
      return element.title + "は半角数字で入力してください。"
    },
  creditcard: "有効なクレジットカード番号を入力してください。",
  equalTo: "同じ値をもう一度入力してください。",
  accept: "有効な拡張子を含む値を入力してください。",
  maxlength: jQuery.format("{0} 文字以内で入力してください。"),
  minlength: jQuery.format("{0} 文字以上で入力してください。"),
  rangelength: jQuery.format("{0} 文字から {1} 文字までの値を入力してください。"),
  range: jQuery.format("{0} から {1} までの値を入力してください。"),
  max: jQuery.format("{0} 以下の値を入力してください。"),
  min: jQuery.format("{0} 以上の値を入力してください。"),
  fullWidthKatakana:
    function(param, element){
      return element.title + "は全角カナで入力してください。"
    }
});