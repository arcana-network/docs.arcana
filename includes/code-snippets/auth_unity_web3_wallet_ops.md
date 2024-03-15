  ```c#
  responseTextField.text = "";
  if (parameters.text != null)
  {
    response = (await arcanaSDK.Request(new RequestParams {
        Method = method.text,
        Params = JsonConvert.DeserializeObject<object[]>(parameters.text)
    })).ToString();
  }
  else
  {
    response = (await arcanaSDK.Request(new RequestParams {
        Method = method.text,
    })).ToString();
  }
  ```