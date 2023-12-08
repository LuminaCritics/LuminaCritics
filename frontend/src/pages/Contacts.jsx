import StardewBackground from "../components/StardewBackground";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Contacts () {
    return (
        <DefaultLayout>
            <StardewBackground />
            <div class="overflow-x-auto">
        <table class="table mt-20">
          <thead>
            <tr>
              <th class = "text-2xl"> Nome </th>
              <th class = "text-2xl"> Resumo Profissional </th>
              <th class = "text-2xl"> Linguagem preferida </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://avatars.githubusercontent.com/u/83096803?v=4" alt="Luccas Castro" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold"> Luccas Castro </div>
                    <div class="text-sm opacity-50"> Brasil </div>
                  </div>
                </div>
              </td>
              <td>
                Universitário da universidade federal do tocantins campus Palmas.
                <br/>
                <span class="badge badge-ghost badge-sm"> Experiência com Java. </span>
              </td>
              <td> Java </td>
              <th>
                <a href = "https://github.com/luccasocastro"> <button class="btn btn-ghost btn-xs"> git hub </button> </a>
              </th>
            </tr>
            <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src="https://avatars.githubusercontent.com/u/73904840?v=4" alt="Mateus Araújo" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold"> Mateus Araújo </div>
                      <div class="text-sm opacity-50"> Brasil </div>
                    </div>
                  </div>
                </td>
                <td>
                  Universitário da universidade federal do tocantins campus Palmas.
                  <br/>
                  <span class="badge badge-ghost badge-sm"> Experiência com django. </span>
                </td>
                <td> Python </td>
                <th>
                  <a href = "https://github.com/Mateus-Arauj"> <button class="btn btn-ghost btn-xs"> git hub </button> </a>
                </th>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src="https://avatars.githubusercontent.com/u/88058645?v=4" alt="Marcos Dyeimison" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold"> Marcos Dyeimison </div>
                      <div class="text-sm opacity-50"> Brasil </div>
                    </div>
                  </div>
                </td>
                <td>
                  Universitário da universidade federal do tocantins campus Palmas.
                  <br/>
                  <span class="badge badge-ghost badge-sm"> Experiência com django. </span>
                </td>
                <td> Python </td>
                <th>
                  <a href = "https://github.com/MDyeimison"> <button class="btn btn-ghost btn-xs"> git hub </button> </a>
                </th>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src="https://avatars.githubusercontent.com/u/60626167?v=4" alt="Emanuel Catão" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold"> Emanuel Catão </div>
                      <div class="text-sm opacity-50"> Brasil </div>
                    </div>
                  </div>
                </td>
                <td>
                  Universitário da universidade federal do tocantins campus Palmas.
                  <br/>
                  <span class="badge badge-ghost badge-sm"> Experiência com docker. </span>
                </td>
                <td> Java </td>
                <th>
                  <a href = "https://github.com/emanuelcatao"> <button class="btn btn-ghost btn-xs"> git hub </button> </a>
                </th>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src="https://avatars.githubusercontent.com/u/130798813?v=4" alt="Ícaro Mesquita" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold"> Ícaro Mesquita </div>
                      <div class="text-sm opacity-50"> Brasil </div>
                    </div>
                  </div>
                </td>
                <td>
                  Universitário da universidade federal do tocantins campus Palmas.
                  <br/>
                  <span class="badge badge-ghost badge-sm"> Experiência com react java script. </span>
                </td>
                <td> Java script</td>
                <th>
                  <a href = "https://github.com/icarompo"> <button class="btn btn-ghost btn-xs"> git hub </button> </a>
                </th>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src="https://avatars.githubusercontent.com/u/92815660?v=4" alt="Bruno Ferreira" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold"> Bruno Ferreira </div>
                      <div class="text-sm opacity-50"> Brasil </div>
                    </div>
                  </div>
                </td>
                <td>
                  Universitário da universidade federal do tocantins campus Palmas.
                  <br/>
                  <span class="badge badge-ghost badge-sm"> Experiência com react java script. </span>
                </td>
                <td> Java script</td>
                <th>
                  <a href = "https://github.com/brunoF-Silva"> <button class="btn btn-ghost btn-xs"> git hub </button> </a>
                </th>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src="https://avatars.githubusercontent.com/u/93159462?v=4" alt="João Gabriel" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold"> João Gabriel </div>
                      <div class="text-sm opacity-50"> Brasil </div>
                    </div>
                  </div>
                </td>
                <td>
                  Universitário da universidade federal do tocantins campus Palmas.
                  <br/>
                  <span class="badge badge-ghost badge-sm"> Experiência com react java script e python. </span>
                </td>
                <td> Java script (com o react)</td>
                <th>
                  <a href = "https://github.com/JoaoGabrielAlvesDeSouza"> <button class="btn btn-ghost btn-xs"> git hub </button> </a>
                </th>
              </tr>
          </tbody>
        </table>
      </div>
        </DefaultLayout>
    );
}