import React, { useState } from "react";
import firebase, { storage } from "../firebase/firebase";

import Uploader from "../components/Uploader";
import Uploading from "../components/Uploading";
import Uploaded from "../components/Uploaded";
import BaseCard from "../components/UI/BaseCard";

const PROCESS = {
  UPLOADING: "UPLOADING",
  DONE: "DONE",
  FAILED: "FAILED",
};

const ImageUploader = () => {
  const [process, setProcess] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const onFileChangeHandler = (e) => {
    const upImage = e.target.files[0];
    onSubmit(upImage);
  };

  const onSubmit = (image) => {
    if (image === "") {
      console.log("ファイルが選択されていません");
    }
    // アップロード処理
    console.log(image);
    setProcess(PROCESS.UPLOADING);
    const uploadTask = storage.ref(`/images/${image.name}`).put(image);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      next,
      error,
      complete(image)
    );
  };

  const next = (snapshot) => {
    // 進行中のsnapshotを得る
    // アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percent + "% done");
    console.log(snapshot);
  };
  const error = (error) => {
    // エラーハンドリング
    console.log(error);
    setProcess(PROCESS.FAILED);
  };
  const complete = (image) => {
    return () => {
      console.log("complete");
      // 完了後の処理
      // 画像表示のため、アップロードした画像のURLを取得
      storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then((fireBaseUrl) => {
          setImageUrl(fireBaseUrl);
        });
        
      setTimeout(() => {
        setProcess(PROCESS.DONE);
      }, 500);
    };
  };

  let view = <Uploader onFileChanged={onFileChangeHandler} />;

  if (process === PROCESS.UPLOADING) {
    view = <Uploading />;
  }
  if (process === PROCESS.DONE) {
    view = <Uploaded imageUrl={imageUrl}  />;
  }

  return <BaseCard>{view}</BaseCard>;
};

export default ImageUploader;
