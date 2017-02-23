class NotesController < ApplicationController
  before_action :require_logged_in, except: [:index, :show]
  before_action :set_note, only: [:edit, :show, :update, :destroy]

  def index
    @notes = Note.all
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

  def show
  end

  def edit
  end

  private

  def note_params
    params.require(:note).permit(:title, :body)
  end

  def set_note
    @note = Note.find(params[:id])
  end
end
