class UI_User{
    constructor(_id_,_username_,_name_,_img_)
    {
      this.id=_id_;
      this.username=_username_;
      this.name=_name_;
      this.img=_img_;
      this.getUser=
        `<tr>
        <th>${this.id}</th>
        <td>${this.username}</td>
        <td>${this.name}</td>
        <td>
            <button type="button" class="btn" data-toggle="modal" data-target="#img-modal">
                <img src=${this.img} alt="profile pic" class="p-image" />
            </button>
        </td>
        <td>
            <div class="btn-group ">
                <button type="button" class="btn btn-success btn-sm" data-toggle="modal"
                    data-target="#edit-user-modal">
                    Edit
                </button>
                <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                    data-target="#delete-modal">
                    Delete
                </button>
            </div>
        </td>
        </tr>
        `;
    }
}
