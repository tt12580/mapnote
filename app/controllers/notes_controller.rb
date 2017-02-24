class NotesController < ApplicationController
  before_action :require_logged_in
  before_action :set_note, only: [:edit, :show, :update, :destroy]

  def index
    @notes = current_user.notes.by_type(params[:note_type])
  end

  def new
    @note = Note.new
  end

  def create
    @note = current_user.notes.build(note_params)
    if @note.save
      flash[:success] = "创建成功。"
      redirect_to notes_url
    else
      flash[:danger] = "创建失败。"
      render :new
    end
  end

  def update
    if @note.update_attributes(note_params)
      flash[:success] = "更新成功。"
      redirect_to edit_note_url(@note)
    else
      flash[:danger] = "更新失败。"
      render :edit
    end
  end

  def destroy
    if @note.destroy
      flash[:success] = "删除成功。"
      redirect_to notes_url
    end
  end

  def show
    if current_user.id == @note.user.id
      render "show"
    else
      redirect_to notes_url
    end
  end

  def edit
    if current_user.id == @note.user.id
      render "edit"
    else
      redirect_to notes_url
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :latlng, :note_type)
  end

  def set_note
    @note = Note.find(params[:id])
  end
end
