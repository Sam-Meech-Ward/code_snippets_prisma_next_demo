
export default function titleFromCode(code, sub = 50) {
  return code.trim().split("\n")[0].replace(/[#\/*]*/g, "").substring(0, sub)
}