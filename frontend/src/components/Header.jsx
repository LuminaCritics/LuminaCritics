export default function Header () {
    return (
        <header class = "bg-black w-screen z-50 fixed">
        <div class="navbar bg-black">
            <div class="navbar-start">
              <a class="btn btn-ghost normal-case invisible sm:visible sm:text-xl  md:text-2xl" href = "/"> Lumina Critics </a>
            </div>
            <div class="navbar-center">
              <ul class="menu menu-horizontal px-1">
                <li><a> Novidades </a></li>
                <li tabindex="0">
                  <details>
                    <summary> Gêneros </summary>
                    <ul class="p-2">
                      <li><a> Ação </a></li>
                      <li><a> Ficção </a></li>
                    </ul>
                  </details>
                </li>
                <li><a> Em alta </a></li>
              </ul>
            </div>
            <div class="navbar-end">
              <input type="text" placeholder = " Buscar " class="input input-bordered w-24 md:w-auto" />
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar mr-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 stroke-white">
                            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                        </svg>
                          
                    </label>
                    <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                      <li id = "profile">
                        <a class="justify-between">
                          Perfil
                          <span class="badge"> Novidades </span>
                        </a>
                      </li>
                      <li id = "configurations"><a> Configurações </a></li>
                      <li id = "signout"><button id = "logout"> Sair </button></li>
                      <li id = "signin"><a href = "/login"> Entrar </a></li>
                    </ul>
                  </div>
            </div>
        </div>
    </header>
    );
}
