import React, { useContext } from "react";
import { LocationIcon } from "../Common/Icons";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../App";

export default function Header() {
  const navigate = useNavigate();

  const { authenticated, fullNameLogin } = useContext(LoginContext)!;

  const handleClick = () => {
    navigate("/SignIn");
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABNVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////7QibkNivkNCn/+/v9q577Si/+8/L/7uz62tj8jHvvh4D8g3HqX1bMzc37SC3Rvrv+9/bwkozsbVn/8/HMzc7kOS7mOyW/LSP+8O/5y8joUkj8QibvgXr8/f35+frQ0ND5SS/iNSrYMyj9ppnQMSb39vbg39/W1tbfNCnHLyT//fz9+fjv7+/8qZzwPSbz8/Pr6+vn5+fj4+Pb29v6xsLyopr5opTnnJHhlIj7Ryz+6ef9rqP0qaH5UzrlOjD7RSnqOyW6KyL/4t3kz8zgzcrQtrP9tar9sqfte3TCd3L6emftbVrsbFnpUj3mQjgGeX2GAAAAF3RSTlMA+9EF9vDruKakj2lPSS8sGQ3i4b69OIta07gAAAM+SURBVGje1drpUhNBFIbhnuwrYe9JIIoLERQJqAkkJmELsqNsIu77/V+CJrH8JsxUf52R6SrfG3iqq7t/nSOchXPpZChmyX/KioWS6VxYeDeSSYwSQBsaTWRGPIhwNh6RN1gknnWdZjgVlTdcNDXcbwyNywAaH3IakyEZSKFJGEPM8K/8PcvwhAysiT/3Ek7JAEv13lg2KgMsmu3+wbgMtHjnV2YiMtAiGSHCCRlwibDIjcmAG8uJtCUDzkqLpAy8pAjJwAuJmAy8mLBk4FlCGuh/QZrtilTEkJnzOW7srK20qqfTt30iM/cfz1OluTY7u/D+q31PoQiVUShQpXrw23jw3bZVilAZ+TxTqq2O8dC2lYpQGkyp7MNQKEJlUGVvBYZCEQqDKrswlIpQGExpw1ArghpQ3I8XBhSOwKBK9QAGUYTKgJI/cj9eGEwRKgPIk2XX44VBFaFtzG05jb0FGFQRusbSs+694PHCoIrQNpy334ZBFSDccL6xnTUYXAHCDShNGHqK0DWgVA9w51wBwg0olRYMTUVoGlBaKzA0FaE0fh72DFRrfPnwTcuAAuSo4HWQ056BGlflH09tVycXl7ar4uF15NbdvFt5PX/4Oe+sflVetD2M7XevVl3G9BQQLwVMoc8olxdxDnTxtrIPBQaQPkXZOoz+Lo+nKntQYAAhCowNGNcqPZ+Suy+hwACipdRgeCttKDCA6Ci1RtdQKTtdBQYQXaVnqJXm0SoMF0KVWp0YHWVLVs+LMFwIU+obHYMox1ty81OxBAMIUWDQTjrKxzMYQBQKHi/+ObuXzU3JESgwGjCIMi2RA+FKDQZFzrQQKHhY3MAf9EaoUn/j1wDClHX/BhCi1F74N4AQxafBESh+DY5A8W1wBMod7f8BQxNBj6BQgyH8LNxgCFe4QRGucIMjXOEGR+jt87fLEa5wgyNc4QZHuMINjnCFGxzhCjc4whVucIQr3OAIV7jBEa5wgyNcgaEfRhuDKKWBDAtDmgGU0jYMjWIYN+kqMHQLYXCmrRRh6JUcfAS4tDygYaWNDDONjGVNDJiNjMpNDP2NrC+YWMQwsVJiYjnGxJqPiYUlE6tXRpfIjKzD/QKIj6Xp8VGBdwAAAABJRU5ErkJggg=="
            alt="Logo"
            className="inline-block w-[50px] h-[50px] object-cover"
          />
        </div>
        <div className="flex gap-12 text-[#524a4a]">
          <a href="">Lịch chiếu</a>
          <a href="">Cụm rạp</a>
          <a href="">Tin tức</a>
          <a href="">Ứng dụng</a>
        </div>
        <div>
          <div className="flex items-center gap-3">
            {authenticated ? (
              <img
                className="w-[30px] h-[30px] rounded-[50%] mr-[10px]"
                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/364743708_1725906504494525_1533049139051175614_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dTDhbyvNbbYAX-Z5Okk&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBzGGr_Cwfmlmd5MSxjddeu7sUBAuX4OH5TZ7-7T_wgLg&oe=64E38399"
              />
            ) : (
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyOEJDRjNERjQzRjExRTNBMDE2RjY3ODg3MTdFOTlDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyOEJDRjNFRjQzRjExRTNBMDE2RjY3ODg3MTdFOTlDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTI4QkNGM0JGNDNGMTFFM0EwMTZGNjc4ODcxN0U5OUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTI4QkNGM0NGNDNGMTFFM0EwMTZGNjc4ODcxN0U5OUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7bOPvnAAAKCElEQVR42uydW1MT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"
                alt="avatar"
                className="w-[30px] h-[30px] rounded-[50%] mr-[10px]"
              />
            )}

            <h2
              className="cursor-pointer hover:opacity-[0.6]"
              onClick={handleClick}
            >
              {authenticated ? (
                <div className="text-[#2b9c31f9]">{fullNameLogin.hoTen}</div>
              ) : (
                "Đăng Nhập"
              )}
            </h2>
            <div className="w-[1px] h-[30px] border-[1px] border-solid text-[#ccc]"></div>
            <LocationIcon />
            <h2>Đà Nẵng</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
