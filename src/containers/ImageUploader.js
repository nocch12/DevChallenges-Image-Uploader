import React, {useState} from 'react';

import Uploader from '../components/Uploader';
import Uploading from '../components/Uploading';
import Uploaded from '../components/Uploaded';
import BaseCard from '../components/UI/BaseCard';

const PROCESS = {
  UPLOADING: 'UPLOADING',
  DONE: 'DONE',
  FAILED: 'FAILED',
};

const ImageUploader = () => {
  const [process, setProcess] = useState(null);


  let view = <Uploader />;
  if(process === PROCESS.UPLOADING) {
    view = <Uploading />;
  }
  if(process === PROCESS.DONE) {
    view = <Uploaded />;
  }

  return (
    <BaseCard>
      {view}
    </BaseCard>
  );
}

export default ImageUploader;
